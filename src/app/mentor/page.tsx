'use client';
import { CiSearch } from 'react-icons/ci';
import { MenteeCard } from '@/app/mentor/ui/MenteeCard';
import { getMenteeList } from '@/service/userService';
import { useEffect } from 'react';

const Mentor = () => {
  // const res = await getMenteeList();
  // console.log('멘티 리스트 출력: ', res);
  useEffect(() => {
    const fetchMentees = async () => {
      try {
        const res = await getMenteeList();
        console.log('멘티 리스트 출력: ', res);
      } catch (error) {
        console.error('멘티 리스트 불러오기 실패: ', error);
      }
    };
    fetchMentees();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#F2F7FF] to-white">
      <section className="container mx-auto mt-[100px] mb-[41px] px-4 text-center">
        <h2 className="mb-[25px] text-2xl font-bold text-gray-900 md:text-[40px]">담당 멘티</h2>
        <p className="mt-2 text-sm text-gray-500 md:text-[20px]">현재 담당하고 있는 멘티 목록입니다.</p>
      </section>

      <div className="container mx-auto mb-[56px] px-4">
        <div className="flex justify-end">
          <div className="relative w-full max-w-[434px]">
            <CiSearch className="absolute top-[50%] left-[12px] h-[20px] w-[20px] -translate-y-[50%] text-[#616161]" />
            <input type="text" placeholder="이름 검색하기" className="w-full rounded-2xl border border-[#616161] py-2 pr-3 pl-10 text-[20px] placeholder-[#616161] focus:outline-none" />
          </div>
        </div>
      </div>

      <div className="container mx-auto flex-1 px-4">
        <div className="mx-auto grid grid-cols-2 gap-6 sm:grid-cols-2 md:max-w-[1307px] lg:grid-cols-3 xl:grid-cols-5">
          <MenteeCard />
          <MenteeCard />
          <MenteeCard />
          <MenteeCard />
          <MenteeCard />
          <MenteeCard />
          <MenteeCard />
          <MenteeCard />
        </div>
      </div>
    </div>
  );
};

export default Mentor;
