const express = require('express');
const router = express.Router();

const Item = require('../../models/Item.js');

// @route GET api/items
// Get All Items

router.get('/', (req, res) => {
  console.log('API hit');
  Item.find({ })
  .sort({ date: -1 })
  .then(items => res.json(items))
  .catch((err) => {
    res.redirect('/')
  })
});

module.exports = router;


