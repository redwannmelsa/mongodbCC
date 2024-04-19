const mongoose = require('mongoose');
const AccountLine = require('./accountLine')

const accountSchema = new mongoose.Schema({
  bankName: { type: String, required: [true, 'Bank name is required'] },
  customName: {
    type: String,
    required: false,
    minlength: [3, 'Custom name must be at least 3 characters long'],
    maxlength: [15, 'Custom name cannot exceed 15 characters'],
    trim: true
  },
  lastUpdated: {
    type: Date
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'User ID is required'],
    ref: "User"
  },
});

accountSchema.pre('save', function (next) {
  this.lastUpdated = Date.now()
  next()
})

accountSchema.pre('findOneAndUpdate', function (next) {
  this.set('lastUpdated', Date.now())
  next()
})

accountSchema.pre('findOneAndDelete', async function (next) {
  try {
    const accountId = this.getQuery()._id
    await AccountLine.deleteMany({ accountId })
    next()
  } catch (error) {
    next(error)
  }
})

const Account = mongoose.model('Account', accountSchema)

module.exports = Account