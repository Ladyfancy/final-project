// import logo from '../ihlogo.png'

const path = require('path')
const axios = require('axios')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

// Seeds file that remove all users and create 2 new users
// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require('mongoose')
const Dog = require('../models/Dog')
// const Prompts = require('models/Prompt')

require('../configs/database')

let dogs = [
  {
    image:
      'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/04/Bulldog_02.jpg',
  },
  {
    image:
      'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/05/16/Pictures/_1571873a-58de-11e8-b431-73159b4b09e2.jpg',
  },
  {
    image:
      'https://www.thesprucepets.com/thmb/GLarzZ5ILugQfIv8Epmo9G-6hxY=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg',
  },
]

// for (let i = 0; i < 101; i++) {
//   axios
//     .get(`https://api.thedogapi.com/v1/images/search?size=full`)
//     .then(dog => {
//       dogs.push(dog.data[0].url)
//       // console.log(dog.data[0].url)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

// Dog.deleteMany()
// .then(() => {
// Dog.create(
//   axios
//     .get(`https://api.thedogapi.com/v1/images/search?size=full`)
//     .then(dog => {
//       console.log(dog)
//       dogs.push(dog.data[0].url)
//       // console.log(dog.data[0].url)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// )
//   .then(dogsCreated => {
//     // console.log(`${dogsCreated.length} prompts created with the following id:`)
//     // console.log(dogsCreated.map(u => u._id))
//   })
//   .then(() => {
//     // Close properly the connection to Mongoose
//     mongoose.disconnect()
//   })
//   .catch(err => {
//     mongoose.disconnect()
//     throw err
//   })

// console.log(dogs)

// let Prompts= [
//   {
//   prompt: "Why are you here? In this room? In this city? In this Country? In this World? In this Universe?",

// },
// {    prompt: "What do you want right now? What do you want from life?",

// },
// {    prompt: "Is there anything you can do right now that will make time spent on this Earth worth it?",

// },
// {    prompt: "Listen to your breath for ten seconds. What is your body telling you?",

// },
// {    prompt: "How will what you're learning help you towards your vision of your life?",

// },
// {    prompt: "What would be the name of your private space in the universe? Who or what would you want there?",

// },
// {    prompt: "How does anyting on your vision board contribute to your happiness?",

// },
// ]

// Prompts.deleteMany()
//   .then(() => {
//     return Prompts.create(prompts)
//   })
//   .then(promptsCreated => {
//     console.log(`${promptsCreated.length} prompts created with the following id:`)
//     console.log(promptsCreated.map(u => u._id))
//   })
//   .then(() => {
//     // Close properly the connection to Mongoose
//     mongoose.disconnect()
//   })
//   .catch(err => {
//     mongoose.disconnect()
//     throw err
//   })

// let categories = [
//   {
//     name: 'Self',
//     image: {logo},
//     description: 'Self Declaration of who you want to be.',
//   },
//   {
//     name: 'Spirituality',
//     image: '../images/genericspiritual.png',
//     description: 'Spiritual Goals',
//   },
//   {
//     name: 'Health',
//     image: '../images/generichealth.png',
//     description: 'Health Goal',
//   },
//   {
//     name: 'Family',
//     image: '../images/genericfamily.png',
//     description: 'Family Goal',
//   },
//   {
//     name: 'Future/Current Home',
//     image: '../images/generichome.png',
//     description: 'Future/Current Home Goal',
//   },

//   {
//     name: 'Education/Learning',
//     image: '../images/genericeducation.png',
//     description: 'Education/Learning Goal',
//   },
//   {
//     name: 'Career',
//     image: '../images/genericcareer.png',
//     description: 'Career Goals',
//   },
//   {
//     name: 'Travel/Vacation',
//     image: '../images/genericvacation.png',
//     description: 'Dream Travel/Vacation',
//   },
// ]

// Category.deleteMany()
//   .then(() => {
//     return Category.create(categories)
//   })
//   .then(categoriesCreated => {
//     console.log(`${categoriesCreated.length}
//      categories created with the following id:`)
//     console.log(categoriesCreated.map(u => u._id))
//   })
//   .then(() => {
//     // Close properly the connection to Mongoose
//     mongoose.disconnect()
//   })
//   .catch(err => {
//     mongoose.disconnect()
//     throw err
//   })
