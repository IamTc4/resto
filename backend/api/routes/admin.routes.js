const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => res.json({ msg: 'Admin Dashboard Data' }));

module.exports = router;
