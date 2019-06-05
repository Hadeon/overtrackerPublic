const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema

const MatchSchema = new Schema({
   creatorId: {
      type: String,
      required: true
   },
   teamId: {
      type: String,
      required: false
   },
   matchDetails: {
      teamName: {
         type: String,
         required: false
      },
      result: {
         type: String,
         required: false
      },
      map: {
         type: String,
         required: false
      },
      enemyTeam: {
         type: String,
         required: false
      },
      allyHeroes: {
         type: Array,
         required: false
      }
   },
   userAccess: {
      type: Array,
      required: false
   },
   date: {
      type: Date,
      default: Date.now
   }
});

module.exports = Match = mongoose.model('match', MatchSchema);