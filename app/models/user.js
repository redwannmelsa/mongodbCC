const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

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
        return v.length >= 6;
      },
      message: 'Password must be at least 6 characters long!'
    }
  }
});

userSchema.plugin(uniqueValidator)

export const User = mongoose.model('User', userSchema)
