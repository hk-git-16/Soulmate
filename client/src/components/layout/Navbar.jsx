import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import wellnessQuotes from '@/data/wellnessQuotes.json';

export default function SerenityNavbar() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const randomQuote = wellnessQuotes[Math.floor(Math.random() * wellnessQuotes.length)];
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author || 'Unknown');
  }, []);

  return ( 
    <header className="flex h-16 w-full items-center justify-between border-b bg-background px-4 md:px-6">
      <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
        <MountainIcon className="h-6 w-6" />
        <span>Serenity</span>
      </Link>
      <nav className="hidden gap-4 md:flex">
        <span className="text-sm font-medium">{quote} - {author}</span>
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" className="rounded-full lg:hidden" aria-label="Toggle menu">
          <MenuIcon className="h-6 w-6" />
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full lg:hidden" aria-label="Toggle menu">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-4 p-4">
              <span className="text-sm font-medium italic">{quote} - {author}</span>
            </div>
          </SheetContent>
        </Sheet>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div />
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}