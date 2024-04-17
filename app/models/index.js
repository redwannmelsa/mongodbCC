const mongoose = require('mongoose');
require('dotenv').config();

const userSchema = require('./user')
const accountSchema = require('./account')
const categorySchema = require('./category')

mongoose.connect(process.env.MONGO_URI, { ssl: false })
  .then(() => console.log('MongoDB connected !'))
  .catch(() => console.log('Erreur with MongoDB connection'));

const User = mongoose.model(User, userSchema)
const Account = mongoose.model(Account, accountSchema)
const Category = mongoose.model(Category, categorySchema)