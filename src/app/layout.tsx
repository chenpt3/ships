import { Inter } from 'next/font/google';
import './globals.css';
import Head from '@/app/head';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import SideMenu from '@/components/layout/sideMenu';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <div className="bg-slate-100 dark:bg-slate-800 min-h-screen flex flex-col">
          <Header />
          <SideMenu />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
