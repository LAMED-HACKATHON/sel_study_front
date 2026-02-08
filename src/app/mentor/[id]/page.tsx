import PlannerPage from '@/app/mentor/[id]/PlannerPage';
const MentorPlanner = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div className="flex min-h-screen flex-col bg-linear-to-b from-[#F2F7FF] to-white">
      <PlannerPage menteeId={id} />
    </div>
  );
};

export default MentorPlanner;
