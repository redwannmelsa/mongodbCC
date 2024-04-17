const mongoose = require('mongoose');

export const accountSchema = new mongoose.Schema({
  bankName: { type: String, required: true },
  customName: { type: String, required: false },
  lastUpdated: { type: Date, required: true },
  userId: { type: objectId, required: true },
});