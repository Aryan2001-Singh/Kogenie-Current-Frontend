"use client";

import { useEffect } from 'react';
import 'aos/dist/aos.css';
import "../styles/index.scss";
import ScrollToTop from "@/components/common/ScrollTop";
import './globals.css';
import { Inter } from 'next/font/google';
import Aos from 'aos'; // Normal import for aos
// import { Description } from '@radix-ui/react-dialog';

// Dynamically import Bootstrap to avoid loading on the server
// import dynamic from 'next/dynamic';// 
// const Bootstrap = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Aos.init({
        duration: 1200,
      });
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-page-wrapper">
          {children}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
