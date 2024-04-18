const jwt = require('jsonwebtoken')
const User = require('../models/User')
require('dotenv').config()

async function createUser(req, res) {
  const { name, email, password } = req.body

  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const newUser = new User({
      name,
      email,
      password
    })

    await newUser.save()

    const token = jwt.sign({ userId: newUser._id }, process.env.TOKEN_SECRET)

    res.status(201).json({ token })
  } catch (error) {
    res.status(500).json({ message: 'Could not create user', error: error.message })
  }
}



module.exports = { createUser }
