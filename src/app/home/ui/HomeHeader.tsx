'use client';
import { useState } from 'react';

// 초기 client component 예제
const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>HomeHeader</div>
      <div>{isOpen ? '1' : '2'} </div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
    </div>
  );
};

export default HomeHeader;
