const express = require('express')
const { isLoggedIn } = require('../middlewares')
const router = express.Router()
const Mindfulness = require('../models/Mindfulness') //This is our database.  find, delete, update

router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user,
  })
})

router.post('/add-mindfulness', isLoggedIn, (req, res, next) => {
  console.log('reqbody', req.body.prompt.prompt)
  Mindfulness.create({
    prompt: req.body.prompt.prompt,
    description: req.body.description,
  }).then(result => {
    res.json({ created: result })
  })
})

router.get('/get-mindfulness', isLoggedIn, (req, res, next) => {
  //connect to this one
  Mindfulness.find().then(result => {
    res.json({ found: result })
  })
})
module.exports = router
