const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const saltRounds = 10;

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: '{VALUE} is not a valid email address!'
    }
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    validate: {
      validator: function (v) {
        // return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v)
        return true
      },
      message: 'Password must be at least 6 characters long!'
    }
  }
});

userSchema.plugin(uniqueValidator)

userSchema.pre('save', async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, saltRounds)
  } catch (error) {
    next(error)
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User