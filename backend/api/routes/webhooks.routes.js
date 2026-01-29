const express = require('express');
const router = express.Router();

router.post('/whatsapp', (req, res) => res.json({ msg: 'WhatsApp Webhook' }));
router.post('/payment', (req, res) => res.json({ msg: 'Payment Webhook' }));

module.exports = router;
