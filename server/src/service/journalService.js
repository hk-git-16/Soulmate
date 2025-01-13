const JournalEntry = require('../models/journalModel.js');
const encryptionMiddleware = require('../middleware/journalEncryptionMiddleware.js');
const { v4: uuidv4 } = require('uuid');

class JournalService {
  async createEntry(userId, entryData) {
    try {
      const encryptedText = encryptionMiddleware.encrypt(entryData.entry_text);
      
      const journalEntry = new JournalEntry({
        creator: userId,
        journalId: uuidv4(),
        date: entryData.date || new Date(),
        entry_text: JSON.stringify(encryptedText),
        journalHeading: entryData.journalHeading
      });

      const savedEntry = await journalEntry.save();
      return savedEntry;
    } catch (error) {
      throw new Error('Error creating journal entry: ' + error.message);
    }
  }

  async getEntries(userId) {
    try {
      const entries = await JournalEntry.find({ creator: userId })
        .sort({ date: -1 });
      
      return entries.map(entry => ({
        ...entry._doc,
        entry_text: encryptionMiddleware.decrypt(JSON.parse(entry.entry_text))
      }));
    } catch (error) {
      throw new Error('Error fetching journal entries: ' + error.message);
    }
  }

  async getEntryById(userId, journalId) {
    try {
      const entry = await JournalEntry.findOne({
        creator: userId,
        journalId: journalId
      });

      if (!entry) {
        throw new Error('Journal entry not found');
      }

      return {
        ...entry._doc,
        entry_text: encryptionMiddleware.decrypt(JSON.parse(entry.entry_text))
      };
    } catch (error) {
      throw new Error('Error fetching journal entry: ' + error.message);
    }
  }
}

module.exports = new JournalService();