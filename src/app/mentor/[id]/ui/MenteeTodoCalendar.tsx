'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const Calendar = dynamic(() => import('react-calendar'), { ssr: false });
import 'react-calendar/dist/Calendar.css';
import '@/style/custom-calendar.css';

const MenteeTodoCalendar = () => {
  const [value, setValue] = useState<Date>(() => new Date());

  return (
    <div className="w-[1004px]">
      {value && (
        <Calendar
          className="mx-auto h-full !w-full border-b text-sm"
          value={value}
          onChange={(value) => {
            setValue(value as Date);
            return new Date(value as Date);
          }}
          formatDay={(locale, date) => date.getDate().toString()}
          next2Label={null}
          prev2Label={null}
          minDetail="month"
          maxDetail="month"
          navigationLabel={({ label }) => <span className="text-[40px] font-semibold text-white">{label}</span>}
          tileContent={({ date, view }) => {
            if (view === 'month' && value !== null && date.getDate() === value.getDate()) {
              return <span className="mx-auto mt-1 h-1 w-1 rounded-full bg-[#4D88E7]" />;
            }

            return null;
          }}
        />
      )}
    </div>
  );
};

export default MenteeTodoCalendar;
