const mongoose = require('mongoose')

const mindfullnessSchema = new mongoose.Schema({
  description: String,
})

const Mindfullness = mongoose.model('Mindfullness', mindfullnessSchema)

module.exports = Mindfullness
