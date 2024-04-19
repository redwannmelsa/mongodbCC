const AccountLine = require('../models/accountLine')
const Account = require('../models/account')
const { listenerCount } = require('../routes/bankLine')

async function createLine(req, res) {
  const { accountId } = req.params
  try {
    const newLine = new AccountLine({
      ...req.body,
      accountId
    })
    newLine.save()
    res.status(201).json(newLine)
  } catch (error) {
    res.status(500).json({ message: 'Could not create line', error: error.message })
  }
}

async function readLines(req, res) {
  const { accountId } = req.params
  try {
    const accountLines = await AccountLine.find({ accountId }).populate('accountId')
    accountLines.forEach(line => {
      if (line.accountId.userId.toString() !== req.auth.userId) {
        res.status(401).json({ message: 'unauthorized request' })
      }
    })
    res.status(200).json({
      accountLines
    })
  } catch (error) {
    res.status(500).json({ message: 'Could not read lines', error: error.message })

  }
}

async function updateLine(req, res) {
  const { bankLineId } = req.params
  try {
    const accountLine = await AccountLine.findOneAndUpdate({ _id: bankLineId }, req.body).exec()

    if (!accountLine) {
      return res.status(404).json({ message: 'Account line not found' })
    }

    res.status(200).json({ message: 'Account line successfully updated', accountLine })
  } catch (error) {
    res.status(500).json({ message: 'Could not update account line', error: error.message })
  }
}

async function deleteLine(req, res) {
  const { bankLineId } = req.params
  try {
    const account = await AccountLine.findOneAndDelete({ _id: bankLineId })
    if (!account) {
      return res.status(404).json({ message: 'Line not found' })
    }
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ message: 'Could not delete line', error: error.message })
  }
}

module.exports = {
  createLine,
  readLines,
  updateLine,
  deleteLine
}