const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema

const MatchSchema = new Schema({
   creatorId: {
      type: String,
      required: true
   },
   matchDetails: {
      result: {
         type: String,
         required: false
      },
      map: {
         type: String,
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