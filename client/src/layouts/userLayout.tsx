import React from 'react';
import { Outlet } from 'react-router-dom';
import SerenitySidebar from '../components/layout/Sidebar';
import SerenityNavbar from '../components/layout/Navbar';

function Layout() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 z-50 w-full border-b bg-white">
        <SerenityNavbar />
      </header>

      <div className="flex h-screen pt-14">
        <aside className="fixed left-0 w-64 h-full border-r bg-white">
          <SerenitySidebar />
        </aside>
        
        <main className="ml-64 flex-1 p-6 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;