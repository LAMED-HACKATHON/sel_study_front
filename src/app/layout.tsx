import type { Metadata } from 'next';
import QueryProvider from '@/components/QueryProvider';
import '@/style/globals.css';
import localFont from 'next/font/local';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ReactNode } from 'react';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: '설 스터디',
  description: '고등학생을 위한 티처 추천 플랫폼',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className="antialiased">
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
