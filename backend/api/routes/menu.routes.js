const express = require('express');
const router = express.Router();
// const menuController = require('../controllers/menu.controller'); // To be implemented

router.get('/', (req, res) => res.send('Get Menu'));
router.post('/', (req, res) => res.send('Create Menu Item'));
router.put('/:id', (req, res) => res.send('Update Menu Item'));
router.delete('/:id', (req, res) => res.send('Delete Menu Item'));

module.exports = router;
