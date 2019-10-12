const mongoose = require('mongoose')

const mindfulnessSchema = new mongoose.Schema({ 
  prompt: String,
  description: String,
})

const Mindfulness = mongoose.model('Mindfulness', mindfulnessSchema)

module.exports = Mindfulness
