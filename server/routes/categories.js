const express = require('express')

const Category = require('../models/Category')
const router = express.Router()

// Route to get all countries
router.get('/', (req, res, next) => {
  Category.find()
    .then(categories => {
      res.json(categories)
    })
    .catch(err => next(err))
})

// Route to add a category
router.post('/', (req, res, next) => {
  let { name, image, description } = req.body
  Category.create({ name, image, description })
    .then(category => {
      res.json({
        success: true,
        category,
      })
    })
    .catch(err => next(err))
})

router.delete('/delete/:id', (req, res, next) => {
  Category.findByIdAndRemove(req.params.id)
    .then(response => {
      res.json(response)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
