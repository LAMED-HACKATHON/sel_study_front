'use client';

import MenteeProfilePanel from '@/app/mentor/[id]/ui/MenteeProfilePanel';
import MenteeTodoPanel from '@/app/mentor/[id]/ui/MenteeTodoPanel';
import MenteeTodoCalendar from '@/app/mentor/[id]/ui/MenteeTodoCalendar';

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
