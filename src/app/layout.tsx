'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Head from '@/app/head';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import SideMenu from '@/components/layout/sideMenu';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <Head />
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header toggle={toggleMenu} />
        <div className="flex flex-1">
          <SideMenu isOpen={isOpen} />
          <main className="flex flex-1 main">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
