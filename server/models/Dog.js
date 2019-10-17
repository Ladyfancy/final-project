const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
  image: String,
})

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog
