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

router.get('/teamMember/:teamId', (req, res) => {
  console.log('Checking if User is authorized for Team...')
  Team.find({ _id: req.params.teamId })
  .then(team => res.json(team))
  .catch((err) => {
    res.json('Error');
  })
})


module.exports = router;

