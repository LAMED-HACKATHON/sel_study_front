'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-7">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="홈" className="flex items-center">
            <Image src="/logo/logo.png" alt="로고" width={120} height={40} className="h-auto w-32" />
          </Link>
          <nav className="hidden items-center space-x-8 md:flex">
            <div className="flex space-x-4">
              <Link href="#" className="rounded-md border border-gray-400 bg-transparent px-6 py-1 text-gray-600 transition-all duration-200 hover:border-gray-500 hover:bg-gray-500 hover:text-white">
                로그인
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
