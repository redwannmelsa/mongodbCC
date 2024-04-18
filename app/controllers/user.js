const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcrypt')
const saltRounds = 10;

const User = require('../models/user')

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
      password: await bcrypt.hash(password, saltRounds)
    })

    await newUser.save()

    res.status(201).json({ message: 'User successfully created' })
  } catch (error) {
    res.status(500).json({ message: 'Could not create user', error: error.message })
  }
}

async function login(req, res) {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email: email });

    if (user == null) {
      res.status(404).json({
        error: 'User not found'
      })
    } else {
      const valid = await bcrypt.compare(password, user.password)
      if (!valid) {
        res.status(401).json({ error: 'Wrong password' })
      } else {
        res.status(200).json({
          jwt: jwt.sign(
            {
              name: user.name,
              email: user.email,
              id: user._id
            },
            process.env.TOKEN_SECRET)
        })
      }
    }
  } catch (e) {
    res.status(500).json(e)
  }
}



module.exports = { createUser, login }
