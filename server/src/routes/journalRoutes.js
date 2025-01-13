const journalController = require('../controllers/journalController.js');
const { protect } = require('../middleware/authMiddleware.js');

const express = require('express');
const router = express.Router();

router.use(protect);

router.post('/', journalController.createEntry);

router.get('/', journalController.getEntries);

router.get('/:journalId', journalController.getEntryById);

module.exports = router;