const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  bankName: { type: String, required: [true, 'Bank name is required'] },
  customName: {
    type: String,
    required: false,
    minlength: [3, 'Custom name must be at least 3 characters long'],
    maxlength: [15, 'Custom name cannot exceed 15 characters'],
    trim: true
  },
  lastUpdated: { type: Date, required: [true, 'Last updated date is required'] },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'User ID is required'],
    ref: "User"
  },
});

const Account = mongoose.model('Account', accountSchema)

module.exports = Account