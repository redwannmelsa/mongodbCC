const express = require('express')
const router = express();

const bankLineCtrl = require("../controllers/wood.js")

router.get('/:accountId/read', bankLineCtrl.readWoods)
router.post('/:accountId/create', bankLineCtrl.createLine)
router.post('/:accountId/update', bankLineCtrl.updateLine)
router.post('/:accountId/delete', bankLineCtrl.deleteLine)

module.exports = router;