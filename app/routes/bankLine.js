const express = require('express')
const router = express();
const auth = require('../middleware/auth')

const bankLineCtrl = require("../controllers/bankLines.js")

router.get('/:accountId', auth, bankLineCtrl.readLines)
router.post('/:accountId', auth, bankLineCtrl.createLine)
router.put('/:bankLineId', auth, bankLineCtrl.updateLine)
router.delete('/:bankLineId', auth, bankLineCtrl.deleteLine)

module.exports = router;