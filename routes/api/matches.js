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

router.post('/add', (req, res) => {
  const match = new Match(req.body);
  match.save().then(match => {
    res.json("Match added successfully");
  }).catch(err => {
    res.status(400).send("Unable to save to database");
  })
})

router.get('')

module.exports = router;


