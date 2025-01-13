const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    journalId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    entry_text: {
        type: String,
        required: true,
    },
    journalHeading: {
        type: String,
        required: false,
    }
});

const JournalEntry = mongoose.model('JournalEntry', journalSchema);
module.exports = JournalEntry;