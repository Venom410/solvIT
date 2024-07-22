// app/layout.tsx
import './globals.css';
import Navbar from '../components/Navbar';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'solvIT',
  description: 'Created by Krish Goyal',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
};

export default RootLayout;
