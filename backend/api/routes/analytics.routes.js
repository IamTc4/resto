const express = require('express');
const router = express.Router();

router.get('/daily', (req, res) => res.json({ msg: 'Daily Stats' }));
router.get('/popular-items', (req, res) => res.json({ msg: 'Popular Items' }));

module.exports = router;
