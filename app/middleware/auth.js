const jwt = require('jsonwebtoken');
require('dotenv').config()

const Account = require('../models/account')

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = decodedToken.id;
    const accountId = req.params.accountId
    req.auth = {
      userId,
      accountId
    };

    // // read and create lines case
    // if (accountId) {
    //   const account = await Account.findById(accountId).exec()
    //   if (account.userId.toString() !== userId) {
    //     res.status(403).json({ message: 'Cannot access this account' })
    //     return
    //   }
    // }

    next();
  } catch (err) {
    res.status(401).json({
      error: 'Unauthorized request!'
    });
  }
};