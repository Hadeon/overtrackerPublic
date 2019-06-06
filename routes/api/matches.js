const express = require('express');
const router = express.Router();

const Match = require('../../models/Match.js');

// @route GET api/matches
// Get All Matches by the userId

// router.get('/:userId', (req, res) => {
//   console.log('User API hit');
//   Match.find({ creatorId : req.params.userId })
//   .sort({ date: -1 })
//   .then(matches => res.json(matches))
//   .catch((err) => {
//     res.redirect('/')
//   })
// });

router.get('/:teamId', (req, res) => {
  console.log('Team Matches API hit');
  Match.find({ teamId : req.params.teamId })
  .sort({ date: -1 })
  .then(matches => res.json(matches))
  .catch((err) => {
    res.redirect('/')
  })
});

module.exports = router;


