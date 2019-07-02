const express = require('express');
const router = express.Router();

const Match = require('../../models/Match.js');

router.get('/details/:matchId', (req, res) => {
  console.log('Match lookup API hit');
  Match.find({ _id : req.params.matchId })
    .then(match => res.json(match))
    .catch((err) => {
      res.redirect('/')
    })
})

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


