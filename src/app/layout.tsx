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
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <div className="flex flex-1">
          <SideMenu />
          <main className="flex flex-1 main">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
