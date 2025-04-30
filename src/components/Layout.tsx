
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FuturisticBackground from './FuturisticBackground';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <FuturisticBackground />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
