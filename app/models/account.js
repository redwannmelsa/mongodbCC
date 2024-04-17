const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  bankName: { type: String, required: true },
  customName: { type: String, required: false },
  lastUpdated: { type: Date, required: true },
  userId: { type: objectId, required: true },
});

export const Account = mongoose.model(Account, accountSchema)