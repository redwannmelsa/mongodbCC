const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { ssl: false })
  .then(() => console.log('MongoDB connected !'))
  .catch(() => console.log('Erreur with MongoDB connection'));