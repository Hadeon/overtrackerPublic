const express = require('express');
const router = express.Router();

const Match = require('../../models/Match.js');

// @route GET api/items
// Get All Items

router.get('/:userId', (req, res) => {
  console.log('API hit');
  Match.find({ creatorId : req.params.userId })
  .sort({ date: -1 })
  .then(matches => res.json(matches))
  .catch((err) => {
    res.redirect('/')
  })
});

module.exports = router;


