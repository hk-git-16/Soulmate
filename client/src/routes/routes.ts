import { lazy, ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import {
  LucideIcon,
  Home,
  LineChart,
  Users,
  Book,
  Award,
  Music,
  MessageCircle,
  UserCheck,
  Calendar,
  Brain,
} from 'lucide-react';

interface RouteConfig {
  path: string;
  name?: string;
  icon?: LucideIcon;
  component?: ComponentType;
  element?: JSX.Element;
  showInSidebar: boolean;
}

// Update import paths to be relative to the routes file
const Dashboard = lazy(() => import('../pages/Dashboard'));
const EmotionTracker = lazy(() => import('../pages/EmotionTracker'));
const Community = lazy(() => import('../pages/Community'));
const Journal = lazy(() => import('../pages/Journal'));
const Achievements = lazy(() => import('../pages/Achievements'));
const MusicTherapy = lazy(() => import('../pages/MusicTherapy'));
const Chat = lazy(() => import('../pages/Chat'));
const TherapistConnect = lazy(() => import('../pages/TherapistConnect'));
const Assessments = lazy(() => import('../pages/Assessments'));
const Appointments = lazy(() => import('../pages/Appointments'));

const routes: RouteConfig[] = [
  {
    path: 'dashboard',
    name: 'Dashboard',
    icon: Home,
    component: Dashboard,
    showInSidebar: true,
  },
  {
    path: 'emotion-tracker',
    name: 'Emotion Tracker',
    icon: LineChart,
    component: EmotionTracker,
    showInSidebar: true,
  },
  {
    path: 'community',
    name: 'Support Community',
    icon: Users,
    component: Community,
    showInSidebar: true,
  },
  {
    path: 'journal',
    name: 'Journal',
    icon: Book,
    component: Journal,
    showInSidebar: true,
  },
  {
    path: 'achievements',
    name: 'Achievements',
    icon: Award,
    component: Achievements,
    showInSidebar: true,
  },
  {
    path: 'music-therapy',
    name: 'Music Therapy',
    icon: Music,
    component: MusicTherapy,
    showInSidebar: true,
  },
  {
    path: 'chat',
    name: 'AI Chat Support',
    icon: MessageCircle,
    component: Chat,
    showInSidebar: true,
  },
  {
    path: 'therapist',
    name: 'Find Therapist',
    icon: UserCheck,
    component: TherapistConnect,
    showInSidebar: true,
  },
  {
    path: 'appointments',
    name: 'Appointments',
    icon: Calendar,
    component: Appointments,
    showInSidebar: true,
  },
  {
    path: 'assessments',
    name: 'Mental Health Tests',
    icon: Brain,
    component: Assessments,
    showInSidebar: true,
  }
];

export type { RouteConfig };
export default routes;
