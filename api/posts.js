const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const UserModel = require('../models/UserModel');
const PostModel = require('../models/PostModel');
const FollowerModel = require('../models/FollowerModel');
const uuid = require('uuid').v4;

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

    const postCreated = await PostModel.findById(post._id).populate('user');
    return res.json(postCreated);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

//get all post
router.get('/', authMiddleware, async (req, res) => {
  const { pageNumber } = req.query;

  const number = Number(pageNumber);
  const size = 8;
  try {
    let posts;
    if (number === 1) {
      posts = await PostModel.find({})
        .limit(size)
        .sort({ createdAt: -1 })
        .populate('user')
        .populate('commets.user');
    } else {
      const skips = size * (Number - 1);
      posts = await PostModel.find({})
        .skip(skips)
        .limit(size)
        .sort({ createdAt: -1 })
        .populate('user')
        .populate('commets.user');
    }
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

//create comment
router.post('/comment/:postId', authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;

    const { text } = req.body;

    if (text.length < 1)
      return res.status(400).send('Comment should be atleast one character');

    const post = await PostModel.findById(postId);
    if (!post) return res.status(404).send('post not found');

    const newComment = {
      _id: uuid(),
      user: req.userId,
      text,
    };

    post.comments.unshift(newComment);
    await post.save();

    return res.status(200).json(newComment._id);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server error');
  }
});

//delete comment
router.delete('/:postId/:commentId', authMiddleware, async (req, res) => {
  try {
    const { commentId, postId } = req.params;
    const { userId } = req;

    const post = await PostModel.findById(postId);
    if (!post) return res.status(404).send('post not found');

    const comment = post.comments.find((comment) => comment._id === commentId);
    if (!comment) {
      return res.status(404).send('comment not found');
    }

    const user = await UserModel.findById(userId);

    if (comment.user.toString() !== userId) {
      if (user.role === 'root') {
        const index = post.comments
          .map((comment) => comment._id)
          .indexOf(commentId);

        await post.comments.splice(index, 1);
        await post.save();
        return res.status(200).send('comment deleted');
      } else {
        return res.status(403).send('unathorized');
      }
    }

    const index = post.comments
      .map((comment) => comment._id)
      .indexOf(commentId);

    await post.comments.splice(index, 1);
    await post.save();

    return res.status(200).send('comment deleted');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

module.exports = router;
