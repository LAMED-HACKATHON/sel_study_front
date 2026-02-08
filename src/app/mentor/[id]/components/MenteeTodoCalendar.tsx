'use client';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const MenteeTodoCalendar = () => {
  return (
    <div className="w-[1075px] border border-blue-700">
      <DayPicker navLayout="around" className="w-full" />
    </div>
  );
};

export default MenteeTodoCalendar;
