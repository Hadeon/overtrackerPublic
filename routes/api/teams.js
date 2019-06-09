const express = require('express');
const router = express.Router();

const Team = require('../../models/Team.js');

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

// Check if userId is present in team's userAccess array

router.get('/teamMember/:teamId/:userId', (req, res) => {
  console.log('Checking if User is authorized for Team...')
  Team.find({ _id: req.params.teamId, teamMembers: req.params.userId })
  .then(team => res.json(team))
  .catch((err) => {
    res.json('Error');
  })
})

// Create team

router.post('/add', (req, res) => {
  const newTeam = new Team(req.body);
  newTeam.save().then(team => {
    res.json('Team added');
  }).catch(err => {
    res.status(400).send('Unable to save to database');
  })
})

// Join team


module.exports = router;

