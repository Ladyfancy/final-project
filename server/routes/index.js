const express = require('express')
const { isLoggedIn } = require('../middlewares')
const router = express.Router()
const Mindfullness = require('../models/Mindfullness') //This is our database.  find, delete, update

router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user,
  })
})

router.post('/add-mindfulness', isLoggedIn, (req, res, next) => {
  console.log('reqbody', req.body.description)
  Mindfullness.create({
    description: req.body.description,
  }).then(result => {
    res.json({ created: result })
  })
})

router.get('/get-mindfulness', isLoggedIn, (req, res, next) => {
  //connect to this one
  Mindfullness.find().then(result => {
    res.json({ found: result })
  })
})
module.exports = router
