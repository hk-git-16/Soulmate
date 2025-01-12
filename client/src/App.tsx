import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/userLayout';
import Home from './pages/testHome';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import EmotionTracker from './pages/EmotionTracker';
import Community from './pages/Community';
import Journal from './pages/Journal';
import Achievements from './pages/Achievements';
import MusicTherapy from './pages/MusicTherapy';
import Chat from './pages/Chat';
import TherapistConnect from './pages/TherapistConnect';
import Assessments from './pages/Assessments';
import Appointments from './pages/Appointments';
import AIChatSupport from './pages/AIChatSupport';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/emotion-tracker" element={<EmotionTracker />} />
          <Route path="/community" element={<Community />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/music-therapy" element={<MusicTherapy />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/find-therapist" element={<TherapistConnect />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/ai-chat-support" element={<AIChatSupport />} />
          <Route path="/mental-health-tests" element={<Assessments />} />
        </Route>
      </Routes>
  );
}

export default App;