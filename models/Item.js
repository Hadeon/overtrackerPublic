const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema

const ItemSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   userId: {
      type: String,
      required: true
   },
   stats: {
      strength: {
         type: String,
         required: false
      },
      constitution: {
         type: String,
         required: false
      },
      dexterity: {
         type: String,
         required: false
      },
      perception:{
         type: String,
         required: false
      },
      intelligence: {
         type: String,
         required: false
      },
      charisma: {
         type: String,
         required: false
      },
      willpower: {
         type: String,
         required: false
      }
   },
   date: {
      type: Date,
      default: Date.now
   }
});

module.exports = Item = mongoose.model('item', ItemSchema);