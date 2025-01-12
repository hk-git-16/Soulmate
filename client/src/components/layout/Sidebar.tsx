import React from 'react';
import { 
  LayoutDashboard, 
  Heart, 
  BookOpen, 
  Trophy,
  Music2,
  MessageSquareMore,
  UserSearch,
  Calendar,
  ClipboardList
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const SerenitySidebar = () => {
  const navItems = [
    { title: "Wellness Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { title: "Emotion Tracker", icon: Heart, path: "/emotion-tracker" },
    { title: "Journal", icon: BookOpen, path: "/journal" },
    { title: "Achievements", icon: Trophy, path: "/achievements" },
    { title: "Music Therapy", icon: Music2, path: "/music-therapy" },
    { title: "AI Chat Support", icon: MessageSquareMore, path: "/ai-chat-support" },
    { title: "Find Therapist", icon: UserSearch, path: "/find-therapist" },
    { title: "Appointments", icon: Calendar, path: "/appointments" },
    { title: "Mental Health Tests", icon: ClipboardList, path: "/mental-health-tests" },
  ];

  return (
    <div className="flex flex-col h-screen border-r bg-background">
      <div className="p-6">
        <h2 className="text-lg font-semibold tracking-tight">Hello, Triple K</h2>
      </div>
      <Separator />
      <ScrollArea className="flex-1 p-4">
        <nav className="grid gap-2">
          {navItems.map((item, index) => (
            <Link to={item.path} key={index}>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 bg-white hover:bg-green-100"
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Button>
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
};

export default SerenitySidebar;