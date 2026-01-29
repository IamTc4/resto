const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => res.json({ msg: 'Get Customer Profile' }));
router.get('/:id/history', (req, res) => res.json({ msg: 'Get Customer History' }));
router.put('/:id', (req, res) => res.json({ msg: 'Update Customer Profile' }));

module.exports = router;
