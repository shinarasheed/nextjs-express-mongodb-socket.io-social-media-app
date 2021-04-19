const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const UserModel = require('../models/UserModel');
const PostModel = require('../models/PostModel');
const FollowerModel = require('../models/FollowerModel');

//create post
router.post('/', authMiddleware, async (req, res) => {
  const { text, location, picUrl } = req.body;

  if (text.length < 1)
    return res.status(400).send('Text must be atleast 1 character');

  try {
    const newPost = {
      user: req.userId,
      text,
    };
    if (location) newPost.location = location;
    if (picUrl) newPost.picUrl = picUrl;

    const post = await new PostModel(newPost).save();
    return res.json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

//get all post
router.get('/', authMiddleware, async (req, res) => {
  try {
    const posts = await PostModel.find({})
      .sort({ createdAt: -1 })
      .populate('user')
      .populate('commets.user');
    return res.json(posts);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('server error');
  }
});

//get post by id
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id)
      .populate('user')
      .populate('comments.user');

    if (!post) {
      return res.status(404).send('Post not found');
    }
    return res.json(post);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('server error');
  }
});

//delete post
router.delete('/:postId', authMiddleware, async (req, res) => {
  const { userId } = req;

  const { postId } = req.params;

  const post = await PostModel.findById(postId);
  if (!post) {
    return res.status(404).send('Post not found');
  }

  const user = await UserModel.findById(userId);

  if (post.user.toString() !== userId) {
    if (user.role === 'root') {
      await post.remove();
      return res.status(204).send('post deleted successfully');
    } else {
      return res.status(403).send('unauthorized');
    }
  }

  await post.remove();
  return res.status(204).send('post deleted successfully');
});

// like a post
router.post('/like/:postId', authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req;

    const post = await PostModel.findById(postId);

    if (!post) {
      return res.status(404).send('post not found');
    }

    const isLiked =
      post.likes.filter((like) => like.user.toString() === userId).length > 0;

    if (isLiked) {
      return res.status(400).send('post already liked by you');
    }

    await post.likes.unshift({ user: userId });
    await post.save();
    return res.status(200).send('post liked');
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('server error');
  }
});

// unlike a post
router.put('/unlike/:postId', authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req;

    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).send('post not found');
    }

    const notLiked =
      post.likes.filter((like) => like.user.toString() === userId).length === 0;

    if (notLiked) {
      return res.status(400).send('post not like yet');
    }

    const index = post.likes
      .map((like) => like.user.toString())
      .indexOf(userId);

    await post.likes.splice(index, 1);
    await post.save();
    return res.status(200).send('post unliked');
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('server error');
  }
});

//get all likes
router.get('/like/:postId', authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await PostModel.findById(postId).populate('likes.user');
    if (!post) {
      return res.status(404).send('post not found');
    }

    return res.status(200).json(post.likes);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('server error');
  }
});

module.exports = router;
