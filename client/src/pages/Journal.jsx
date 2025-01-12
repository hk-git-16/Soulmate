import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter, 
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';

const Journal = () => {
  const [open, setOpen] = useState(false);
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [password, setPassword] = useState('');
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [decryptedContent, setDecryptedContent] = useState('');

  const encryptText = (text) => {
    return btoa(text);
  };

  const decryptText = (encryptedText) => {
    return atob(encryptedText);
  };

  const verifyPassword = (inputPassword) => {
    return inputPassword === '1234';
  };

  useEffect(() => {
    const loadEntries = async () => {
      try {
        const response = await fetch('/api/journalEntries.json');
        const data = await response.json();
        setEntries(data);
      } 
      catch (error) {
        console.error('Error loading entries:', error);
      } 
      finally {
        setLoading(false);
      }
    };

    loadEntries();
  }, []);

  const handleSaveEntry = () => {
    if (!newEntry.trim()) 
      return;

    const date = new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const heading = title 
      ? `${date} - ${title}`
      : date;

    const newJournalEntry = {
      id: Date.now(),
      heading,
      content: encryptText(newEntry),
      date: new Date().toISOString(),
      isFavorite: false
    };

    setEntries(prev => [newJournalEntry, ...prev]);
    setNewEntry('');
    setTitle('');
    setOpen(false);
  };

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
    setPassword('');
    setIsPasswordDialogOpen(true);
  };

  const handlePasswordSubmit = () => {
    if (verifyPassword(password)) {
      setDecryptedContent(decryptText(selectedEntry.content));
      setIsPasswordDialogOpen(false);
      setIsViewDialogOpen(true);
    } 
    else {
      setPassword('');
    }
  };

  const renderEntryCards = (entries, showFavorites = false) => {
    const filteredEntries = showFavorites 
      ? entries.filter(entry => entry.isFavorite)
      : entries;

    return filteredEntries.map(entry => (
      <Card 
        key={entry.id} 
        className="hover:shadow-lg transition-shadow cursor-pointer" 
        onClick={() => handleEntryClick(entry)}
      >
        <CardHeader>
          <CardTitle>{entry.heading}</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[60px] w-full" />
        </CardContent>
      </Card>
    ));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Journal</h1>
      <p className="text-gray-600">Write and manage your personal journal entries.</p>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>New Journal Entry</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>New Journal Entry</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Title (optional)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              className="min-h-[200px]"
              placeholder="Write your thoughts here..."
              value={newEntry}
              onChange={(e) => setNewEntry(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveEntry}>Save Entry</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={isPasswordDialogOpen} onOpenChange={setIsPasswordDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Enter Password</AlertDialogTitle>
          </AlertDialogHeader>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <AlertDialogFooter>
            <Button variant="outline" onClick={() => setIsPasswordDialogOpen(false)}>Cancel</Button>
            <Button onClick={handlePasswordSubmit}>View Entry</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>{selectedEntry?.heading}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="whitespace-pre-wrap">{decryptedContent}</p>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsViewDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Tabs defaultValue="entries" className="w-full">
        <TabsList>
          <TabsTrigger value="entries">All Entries</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
        </TabsList>
        
        <TabsContent value="entries" className="space-y-4">
          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-[28px] w-[200px]" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-[60px] w-full" />
                </CardContent>
              </Card>
            ))
          ) : (
            renderEntryCards(entries)
          )}
        </TabsContent>
        
        <TabsContent value="favorites" className="space-y-4">
          {loading ? (
            <Card>
              <CardHeader>
                <Skeleton className="h-[28px] w-[200px]" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-[60px] w-full" />
              </CardContent>
            </Card>
          ) : (
            renderEntryCards(entries, true)
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Journal;