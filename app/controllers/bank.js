const jwt = require('jsonwebtoken')
require('dotenv').config()

const Account = require('../models/account')

async function createBank(req, res) {
  const { bankName, customName } = req.body

  try {
    const newAccount = new Account({
      bankName,
      customName,
      userId: req.auth.userId
    })

    await newAccount.save()

    res.status(201).json({ message: 'bank account successfully created' })
  } catch (error) {
    res.status(500).json({ message: 'Could not create bank account', error: error.message })
  }
}

async function readBank(req, res) {
  try {
    res.status(200).json({
      accounts: await Account.find({ userId: req.auth.userId })
    })
  } catch (error) {
    res.status(500).json({ message: 'Could not read all bank accounts', error: error.message })
  }
}

async function updateBank(req, res) {
  const { id } = req.params

  try {
    const account = await Account.findOneAndUpdate({ _id: id, userId: req.auth.userId }, req.body)

    if (!account) {
      return res.status(404).json({ message: 'Bank account not found' })
    }

    res.status(200).json({ message: 'Bank account successfully updated' })
  } catch (error) {
    res.status(500).json({ message: 'Could not update bank account', error: error.message })
  }
}

async function deleteBank(req, res) {
  const { id } = req.params
  try {
    const account = await Account.findOneAndDelete({ _id: id, userId: req.auth.userId })
    if (!account) {
      return res.status(404).json({ message: 'Bank account not found' })
    }
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ message: 'Could not delete bank account', error: error.message })
  }
}



module.exports = {
  createBank,
  readBank,
  updateBank,
  deleteBank
}