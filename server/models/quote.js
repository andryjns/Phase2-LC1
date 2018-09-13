const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quoteSchema = new Schema({
  likes: [],
  status: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote