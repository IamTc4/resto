const express = require('express');
const router = express.Router();
// const orderController = require('../controllers/order.controller');

router.post('/', (req, res) => res.json({ msg: 'Create Order' }));
router.get('/:id', (req, res) => res.json({ msg: 'Get Order' }));
router.put('/:id/status', (req, res) => res.json({ msg: 'Update Status' }));

module.exports = router;
