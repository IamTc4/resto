const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({ msg: 'Get Menu' }));
router.post('/', (req, res) => res.json({ msg: 'Add Menu Item' }));
router.put('/:id', (req, res) => res.json({ msg: 'Update Menu Item' }));
router.delete('/:id', (req, res) => res.json({ msg: 'Delete Menu Item' }));

module.exports = router;
