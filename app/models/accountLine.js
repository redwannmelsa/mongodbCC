const mongoose = require('mongoose');

const accountLineSchema = new mongoose.Schema({
  label: { type: String, required: true },
  type: { type: String, required: true },
  amount: { type: Date, required: true },
  paymentDate: { type: Date, required: true },
  paymentMethod: { type: String, required: true },
  isChecked: { type: Boolean, required: true },
  category: { type: ObjectId, required: true },
  accountId: { type: ObjectId, required: true }
});

export const AccountLine = mongoose.model(AccountLine, accountLineSchema)