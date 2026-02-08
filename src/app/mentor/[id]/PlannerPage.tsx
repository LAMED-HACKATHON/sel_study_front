'use client';

import { useState } from 'react';
import MenteeProfilePanel from '@/app/mentor/[id]/components/MenteeProfilePanel';
import MenteeTodoPanel from '@/app/mentor/[id]/components/MenteeTodoPanel';
import MenteeTodoCalendar from '@/app/mentor/[id]/components/MenteeTodoCalendar';

const PlannerForm = ({ menteeId }: { menteeId: string }) => {
  return (
    <div className="mx-auto mt-[105px] flex w-full max-w-[1760px] gap-[19px]">
      <MenteeProfilePanel />
      <MenteeTodoCalendar />
      <MenteeTodoPanel />
    </div>
  );
};

export default PlannerForm;
