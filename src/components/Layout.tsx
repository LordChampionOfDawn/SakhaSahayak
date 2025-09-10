import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import MobileNavigation from './MobileNavigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-16 pb-20 md:pb-4">
        {children}
      </main>
      <MobileNavigation />
    </>
  );
};

export default Layout;