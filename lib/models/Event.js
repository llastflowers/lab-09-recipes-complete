const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  },
  dateOfEvent: {
    type: Date,
    required: true
  },
  notes: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  }
});

schema.virtual('day')
  .get(function() {
    const date = this.dateOfEvent;
    const day = date.getDay();
    return day;
  })
  .set(function(day) {
    this.dateOfEvent.getDate(day);
  });

module.exports = mongoose.model('Event', schema);
