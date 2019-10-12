const express = require('express')
const Mindfulness = require('../models/Mindfulness')

const router = express.Router()

// Route to get all entries
router.get('/', (req, res, next) => {
  Mindfulness.find()
    .then(mindfulness => {
      res.json(mindfulness)
    })
    .catch(err => next(err))
})

// Route to add an entry
router.post('/', (req, res, next) => {
  let { prompt, description } = req.body
  Mindfulness.create({ prompt, description })
    .then(mindfulness => {
      res.json({
        success: true,
        mindfulness,
      })
    })
    .catch(err => next(err))
})

module.exports = router
