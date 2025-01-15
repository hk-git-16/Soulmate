const mongoose = require('mongoose');

const TherapistProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: '', 
  },
  yearsOfExperience: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  specializations: {
    type: [String],
    required: true,
  },
  chargePerHour: {
    type: Number,
    required: true,
  },
  languages: {
    type: [String],
    default: [], // Languages spoken by the therapist
  },
  availability: [
    {
      date: { type: Date, required: true },
      timeSlots: { type: [String], default: [] }, 
    },
  ],
  bio: {
    type: String,
    default: '', // A short biography
  },
  email: { 
    type: String,
    required: true,
  },
  reviews: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      comment: { type: String, default: '' },
      rating: { type: Number, min: 0, max: 5 },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('TherapistProfile', TherapistProfileSchema);
