'use client';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const MenteeTodoCalendar = () => {
  return (
    <div className="w-[1075px] border border-blue-700">
      <DayPicker
        navLayout="around"
        classNames={{
          table: 'w-full',
          row: 'grid grid-cols-7',
          head_row: 'grid grid-cols-7',
          cell: 'flex justify-center',
        }}
      />
    </div>
  );
};

export default MenteeTodoCalendar;
