import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import QueryProvider from '@/components/QueryProvider';
import '@/style/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ReactNode } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '설 스터디',
  description: '고등학생을 위한 티처 추천 플랫폼',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
