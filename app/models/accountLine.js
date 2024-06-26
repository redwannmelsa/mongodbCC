const mongoose = require('mongoose');
const Account = require('./account')

const accountLineSchema = new mongoose.Schema({
  label: {
    type: String,
    required: [true, 'Label is required'],
    minlength: [2, 'Label must be at least 2 characters long'],
    maxlength: [50, 'Label cannot exceed 50 characters'],
  },
  type: {
    type: String,
    required: [true, 'Type is required'],
    enum: {
      values: ['credit', 'debit'],
      message: 'Type must be credit or debit'
    }
  },
  amount: { type: Number, required: [true, 'Amount is required'] },
  paymentDate: { type: Date, required: [true, 'Payment date is required'] },
  paymentMethod: {
    type: String,
    required: [true, 'Payment method is required'],
    enum: {
      values: ["Cash", "Direct Deposit", "Credit Card", "Bank Transfer"],
      message: "{VALUE} is not a supported payment method"
    }
  },
  isChecked: { type: Boolean, required: [true, 'Checked status is required'] },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, 'Category is required']
  },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Account ID is required'],
    ref: "Account"
  },
  lastUpdated: { type: Date }
});

accountLineSchema.pre('save', async function (next) {
  this.lastUpdated = Date.now()
  next()
})

// accountLineSchema.pre('find', async function (next) {
//   const account = await Account.findById(req.auth.accountId).exec()
//   if (account.userId.toString() !== req.auth.userId) {
//     res.status(403).json({ message: 'Cannot access this account' })
//   } else {
//     next()
//   }
// })

const AccountLine = mongoose.model('AccountLine', accountLineSchema)

module.exports = AccountLine