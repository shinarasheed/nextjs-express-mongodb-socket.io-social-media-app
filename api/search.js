const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware.js');
const UserModel = require('../models/UserModel.js');

router.get('/:searchText', authMiddleware, async (req, res) => {
  const { searchText } = req.params;

  if (searchText.length === 0) return;

  try {
    const results = await UserModel.find({
      name: { $regex: searchText, $options: 'i' },
    });

    res.json(results);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
