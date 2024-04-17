const mongoose = require('mongoose');

const accountLineSchema = new mongoose.Schema({
  label: {
    type: String,
    required: [true, 'Label is required'],
    minlength: [3, 'Label must be at least 3 characters long'],
    maxlength: [15, 'Label cannot exceed 15 characters'],

  },
  type: { type: String, required: [true, 'Type is required'] },
  amount: { type: Number, required: [true, 'Amount is required'] },
  paymentDate: { type: Date, required: [true, 'Payment date is required'] },
  paymentMethod: { type: String, required: [true, 'Payment method is required'] },
  isChecked: { type: Boolean, required: [true, 'Checked status is required'] },
  category: { type: mongoose.Schema.Types.ObjectId, required: [true, 'Category is required'] },
  accountId: { type: mongoose.Schema.Types.ObjectId, required: [true, 'Account ID is required'] },
  lastUpdated: { type: Date, required: [true, 'Last updated date is required'] }
});

export const AccountLine = mongoose.model('AccountLine', accountLineSchema)