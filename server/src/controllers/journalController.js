const journalService = require('../service/journalService');

class JournalController {
  async createEntry(req, res) {
    try {
      const { entry_text, journalHeading, date } = req.body;
      
      if (!entry_text) {
        return res.status(400).json({ message: 'Entry text is required' });
      }

      const entry = await journalService.createEntry(req.user._id, {
        entry_text,
        journalHeading,
        date
      });

      res.status(201).json(entry);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getEntries(req, res) {
    try {
      const entries = await journalService.getEntries(req.user._id);
      res.status(200).json(entries);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getEntryById(req, res) {
    try {
      const { journalId } = req.params;
      const entry = await journalService.getEntryById(req.user._id, journalId);
      res.status(200).json(entry);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new JournalController();