import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Heart, Smile, Frown, Angry, Brain, Sun } from 'lucide-react';

const EmotionTracker = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [intensity, setIntensity] = useState([5]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [notes, setNotes] = useState('');
  const [entries, setEntries] = useState([]);

  const emotions = [
    { name: 'Happy', color: 'bg-yellow-400/80', hoverColor: 'hover:bg-yellow-400 hover:shadow-yellow-400/50', icon: <Smile className="w-6 h-6" /> },
    { name: 'Sad', color: 'bg-blue-400/80', hoverColor: 'hover:bg-blue-400 hover:shadow-blue-400/50', icon: <Frown className="w-6 h-6" /> },
    { name: 'Angry', color: 'bg-red-400/80', hoverColor: 'hover:bg-red-400 hover:shadow-red-400/50', icon: <Angry className="w-6 h-6" /> },
    { name: 'Love', color: 'bg-pink-400/80', hoverColor: 'hover:bg-pink-400 hover:shadow-pink-400/50', icon: <Heart className="w-6 h-6" /> },
    { name: 'Calm', color: 'bg-green-400/80', hoverColor: 'hover:bg-green-400 hover:shadow-green-400/50', icon: <Sun className="w-6 h-6" /> },
    { name: 'Anxious', color: 'bg-purple-400/80', hoverColor: 'hover:bg-purple-400 hover:shadow-purple-400/50', icon: <Brain className="w-6 h-6" /> },
  ];

  const categories = [
    { name: 'Family', color: 'bg-indigo-400/80', hoverColor: 'hover:bg-indigo-400 hover:shadow-indigo-400/50' },
    { name: 'Work', color: 'bg-orange-400/80', hoverColor: 'hover:bg-orange-400 hover:shadow-orange-400/50' },
    { name: 'Exercise', color: 'bg-green-400/80', hoverColor: 'hover:bg-green-400 hover:shadow-green-400/50' },
    { name: 'Social', color: 'bg-pink-400/80', hoverColor: 'hover:bg-pink-400 hover:shadow-pink-400/50' },
    { name: 'Health', color: 'bg-blue-400/80', hoverColor: 'hover:bg-blue-400 hover:shadow-blue-400/50' },
    { name: 'Hobbies', color: 'bg-purple-400/80', hoverColor: 'hover:bg-purple-400 hover:shadow-purple-400/50' },
  ];

  const mockData = [
    { date: 'Mon', happiness: 8, anxiety: 3, energy: 7 },
    { date: 'Tue', happiness: 6, anxiety: 5, energy: 5 },
    { date: 'Wed', happiness: 7, anxiety: 4, energy: 6 },
    { date: 'Thu', happiness: 9, anxiety: 2, energy: 8 },
    { date: 'Fri', happiness: 8, anxiety: 3, energy: 7 },
  ];

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const saveEntry = () => {
    if (!selectedEmotion) return;

    const date = new Date();
    const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}-${date.getTime()}`;

    const entry = {
      id: formattedDate,
      emotion: selectedEmotion,
      intensity: intensity[0],
      tags: selectedTags,
      notes: btoa(notes),
      timestamp: date.toISOString()
    };

    fetch('/api/emotionEntries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry)
    });

    setSelectedEmotion(null);
    setIntensity([5]);
    setSelectedTags([]);
    setNotes('');
  };

  return (
    <div className="h-screen p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="lg:h-[calc(100vh-8rem)]">
        <CardHeader>
          <CardTitle>How are you feeling?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 h-[calc(100%-5rem)] overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {emotions.map(emotion => (
              <Button
                key={emotion.name}
                variant="outline"
                className={`h-16 flex flex-col items-center justify-center transition-all hover:shadow-lg ${emotion.hoverColor}`}
                onClick={() => setSelectedEmotion(emotion.name)}
              >
                {emotion.icon}
                <span className="mt-1 text-sm">{emotion.name}</span>
              </Button>
            ))}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Intensity</label>
            <Slider
              value={intensity}
              onValueChange={setIntensity}
              max={10}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Mild</span>
              <span>Moderate</span>
              <span>Intense</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Categories</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Badge
                  key={category.name}
                  variant="outline"
                  className={`cursor-pointer transition-all ${category.hoverColor}`}
                  onClick={() => handleTagToggle(category.name)}
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex-grow">
            <label className="text-sm font-medium mb-2 block">Notes</label>
            <Textarea
              placeholder="What's on your mind?"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="h-24"
            />
          </div>

          <Button 
            className="w-full bg-gray-800 hover:bg-gray-900 text-white" 
            onClick={saveEntry}
          >
            Save Entry
          </Button>
        </CardContent>
      </Card>

      <Card className="lg:h-[calc(100vh-8rem)]">
        <CardHeader>
          <CardTitle>Trends</CardTitle>
        </CardHeader>
        <CardContent className="h-[calc(100%-5rem)]">
          <Tabs defaultValue="daily" className="h-full flex flex-col">
            <TabsList>
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
            <TabsContent value="daily" className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="happiness" 
                    stroke="#EAB308" 
                    strokeWidth={2} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="anxiety" 
                    stroke="#A855F7" 
                    strokeWidth={2} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="energy" 
                    stroke="#3B82F6" 
                    strokeWidth={2} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="weekly" className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="happiness" stroke="#EAB308" strokeWidth={2} />
                  <Line type="monotone" dataKey="anxiety" stroke="#A855F7" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="monthly" className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="happiness" stroke="#EAB308" strokeWidth={2} />
                  <Line type="monotone" dataKey="energy" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmotionTracker;