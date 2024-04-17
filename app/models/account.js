const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  bankName: { type: String, required: [true, 'Bank name is required'] },
  customName: { type: String, required: false },
  lastUpdated: { type: Date, required: [true, 'Last updated date is required'] },
  userId: { type: mongoose.Schema.Types.ObjectId, required: [true, 'User ID is required'] },
});

export const Account = mongoose.model('Account', accountSchema)