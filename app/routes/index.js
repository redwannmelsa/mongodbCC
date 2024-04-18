const express = require('express')
const router = express();

const userRoutes = require('./user.js')
const bankRoutes = require('./bank.js')
// const bankLinesRoutes = require('./bankLines.js')

router.use("/auth", userRoutes)
router.use("/bank", bankRoutes)
// router.use("/bankLines", bankLinesRoutes)

module.exports = router