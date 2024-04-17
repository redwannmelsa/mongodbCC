const express = require('express')
const router = express();

const bankCtrl = require("../controllers/bank.js")

router.get('/read', bankCtrl.readBanks)
router.post('/create', bankCtrl.createbank)
router.post('/update', bankCtrl.updatebank)
router.post('/delete', bankCtrl.deletebank)

module.exports = router;