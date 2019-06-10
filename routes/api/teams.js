const express = require('express');
const router = express.Router();

const Team = require('../../models/Team.js');
const Invite = require('../../models/Invite.js');

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
});

// Create team

router.post('/add', (req, res) => {
  const newTeam = new Team(req.body);
  newTeam.save().then(team => {
    res.json('Team added');
  }).catch(err => {
    res.status(400).send('Unable to save to database');
  })
})

// Create Invite Code

router.post('/invite', (req, res) => {

  // Need to use req.body.userId to identify if the user is the Team's creatorId
  // If it is, then continue with the Invite creation, if not, then res 'Not authorized'

  const invite = new Invite(req.body);
  Invite.save().then(invite => {
    res.json(invite);
  }).catch(err => {
    res.status(400).send('Not authorized to create invite code');
  })
});

// Join team

router.put('/join/:inviteCode', (req, res) => {

  // Find the Invite by Id, if the Invite.active === true
  // .then lookup Team._id by the Invite.teamId and add the req.body.userId to the Team.userAccess array 
  // .then findByIdAndUpdate the Invite and set Invite.active to false so that this code can't be used again

});

module.exports = router;

