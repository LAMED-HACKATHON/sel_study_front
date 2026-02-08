import PlannerPage from '@/app/mentor/[id]/PlannerPage';
const MentorPlanner = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <main className="flex min-h-screen flex-col items-center bg-linear-to-b from-[#F2F7FF] to-white">
      <div className="max-w-[96%]">
        <PlannerPage menteeId={id} />
      </div>
    </main>
  );
};

export default MentorPlanner;
