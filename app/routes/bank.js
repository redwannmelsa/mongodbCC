const express = require('express')
const router = express();
const auth = require('../middleware/auth')

const bankCtrl = require("../controllers/bank.js")

router.get('/', auth, bankCtrl.readBank)
router.post('/', auth, bankCtrl.createBank)
router.put('/:id', auth, bankCtrl.updateBank)
router.delete('/:id', auth, bankCtrl.deleteBank)

module.exports = router;