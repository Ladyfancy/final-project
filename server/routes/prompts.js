const express = require('express')

const Prompts = require('../models/Prompts')
const router = express.Router()

// Route to get all prompts
router.get('/', (req, res, next) => {
  Prompts.find()
    .then(prompts => {
      res.json(prompts)
    })
    .catch(err => next(err))
})

// Route to add a prompt
router.post('/', (req, res, next) => {
  let { prompt } = req.body
  Prompts.create({ prompt })
    .then(prompt => {
      res.json({
        success: true,
        prompt,
      })
    })
    .catch(err => next(err))
})

module.exports = router
