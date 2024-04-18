const express = require('express')
const router = express();

const bankLineCtrl = require("../controllers/wood.js")

router.get('/:accountId', bankLineCtrl.readWoods)
router.post('/:accountId', bankLineCtrl.createLine)
router.put('/:accountId', bankLineCtrl.updateLine)
router.delete('/:accountId', bankLineCtrl.deleteLine)

module.exports = router;