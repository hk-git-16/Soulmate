import express from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/emotion_tracker';
const client = new MongoClient(uri);

interface EmotionEntry {
  id: string;
  emotion: string;
  intensity: number;
  tags: string[];
  notes: string;
  timestamp: string;
}

// Dummy auth middleware - will replace with real auth later
const getDummyUser = () => ({
  id: 'dummy-user-123',
  name: 'Test User',
  email: 'test@example.com'
});

router.post('/emotionEntries', async (req, res) => {
  const user = getDummyUser();
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    await client.connect();
    const db = client.db('emotion_tracker');
    const collection = db.collection('emotion_entries');

    const entry: EmotionEntry = req.body;

    if (!entry.emotion || !entry.intensity || !entry.timestamp) {
      return res.status(400).json({
        message: 'Missing required fields: emotion, intensity, and timestamp are required'
      });
    }

    if (entry.intensity < 0 || entry.intensity > 10) {
      return res.status(400).json({
        message: 'Intensity must be between 0 and 10'
      });
    }

    const document = {
      userId: user.id,  
      emotion: entry.emotion,
      intensity: entry.intensity,
      tags: entry.tags || [],
      notes: entry.notes || '',
      timestamp: new Date(entry.timestamp),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await collection.insertOne(document);

    return res.status(201).json({
      _id: result.insertedId,
      ...document
    });

  } 
  catch (error) {
    console.error('Error saving emotion entry:', error);
    return res.status(500).json({
      message: 'Error saving emotion entry',
      error: process.env.NODE_ENV === 'development' ? error : undefined
    });
  } 
  finally {
    await client.close();
  }
});

export default router;