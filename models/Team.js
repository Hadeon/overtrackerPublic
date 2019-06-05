const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema

// Upon creating a team, the userId of the creator is added to both the teamMembers array AND creatorId.
// When someone is invited into a team and successfully uses the invite code, their userId is added to the teamMembers array.

const TeamSchema = new Schema({
  teamId: {
    type: String,
    required: true
  },
  teamName: {
    type: String,
    required: true
  },
  teamMembers: {
    type: Array,
    required: false
  },
  creatorId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Team = mongoose.model('team', TeamSchema);