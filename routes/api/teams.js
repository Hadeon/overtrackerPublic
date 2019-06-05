const express = require('express');
const router = express.Router();

const Team = require('../../models/Team.js');
const Matches = require('../../models/Match.js');

// @route GET api/teams
// Get All Teams that include the userId within the teamMembers array.

router.get('/:userId', (req, res) => {
  console.log('Team API hit');
  Team.find({ teamMembers : req.params.userId })
  .sort({ teamName: 1 })
  .then(team => res.json(team))
  .catch((err) => {
    res.redirect('/')
  })
});

// @route GET api/teams/matches
// Get All Matches for the teamId

router.get('/matches/:id', (req, res) => {
  console.log('Team Matches API hit');
  Matches.find({ teamId : req.params.id })
  .sort({ date: -1 })
  .then(match => res.json(match))
  .catch((err) => {
    res.redirect('/')
  })
})

module.exports = router;

