'use client';

import { useState } from 'react';
import MenteeProfilePanel from '@/app/mentor/[id]/components/MenteeProfilePanel';

const PlannerForm = ({ menteeId }: { menteeId: string }) => {
  return (
    <div className="mx-auto mt-[105px] flex w-full max-w-[1760px] gap-[19px] border border-red-600">
      <MenteeProfilePanel />
      <div className="w-[1075px] border border-blue-700">1075px width</div>
      <div className="w-[363px] border border-black">363px</div>
    </div>
  );
};

export default PlannerForm;
