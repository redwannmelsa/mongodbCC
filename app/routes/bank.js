const express = require('express')
const router = express();

const bankCtrl = require("../controllers/bank.js")

router.get('/', bankCtrl.readBanks)
router.post('/', bankCtrl.createbank)
router.post('/:id', bankCtrl.updatebank)
router.post('/delete/:id', bankCtrl.deletebank)

module.exports = router;