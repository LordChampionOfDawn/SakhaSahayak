import React, { ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import Navbar from './Navbar';
import MobileNavigation from './MobileNavigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* Floating Emergency Button */}
      <div className="fixed bottom-20 right-4 z-50 md:bottom-4">
        <button 
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          style={{
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)',
            animation: 'pulse 2s infinite'
          }}
          onClick={() => window.location.href = '/disaster'}
        >
          <AlertTriangle className="h-6 w-6" />
        </button>
      </div>

      {/* Safety Status Bar */}
      <div className="fixed top-16 left-0 right-0 bg-green-100 border-b border-green-200 px-4 py-2 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-green-800 font-medium">Safety Status:</span>
            <span className="text-green-700">All systems normal • Weather favorable • Emergency services active</span>
          </div>
          <button className="text-green-600 hover:text-green-800 font-medium">
            View Details →
          </button>
        </div>
      </div>

      <Navbar />
      <main className="pt-28 pb-20 md:pb-4">
        {children}
      </main>
      <MobileNavigation />
    </>
  );
};

export default Layout;