import Image from 'next/image';
import { RxDividerVertical } from 'react-icons/rx';
import { BsCardChecklist, BsChat } from 'react-icons/bs';

const MenteeProfilePanel = () => {
  return (
    <div className="w-[284px] border border-green-600">
      <div className="mt-[48px]">
        <h2 className="mb-[18px] text-[40px] font-bold">담당 멘티</h2>
        <p className="text-[20px] font-light">현재 담당하고 있는 멘티 목록입니다</p>
      </div>
      <div className="mt-[51px]">
        <div className="flex inline-flex flex-col gap-[14px]">
          {/* 프로필 이미지 */}
          <div className="flex-shrink-0">
            <div className="relative mx-auto h-[115px] w-[115px] overflow-hidden rounded-full">
              <Image src="https://www.loremfaces.net/96/random.jpg" alt="멘티 프로필 이미지" fill className="object-cover" sizes="96px" />
            </div>
          </div>

          {/* 프로필 정보 */}
          <h3 className="text-center text-[32px] font-bold text-gray-900">홍길동</h3>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[16px] font-medium text-gray-600">1학년</span>
              <RxDividerVertical className="self-center text-gray-300" />
              <span className="text-[16px] text-gray-600">학교 이름</span>
            </div>
          </div>

          {/* 왼쪽 밑 메뉴 */}
          <div className="mt-[70px] flex flex-col items-start gap-[40px] border">
            <button className="flex cursor-pointer items-center text-[27px] font-medium">
              <BsCardChecklist size={24} className="mr-[6px]" />할 일 등록
            </button>
            <button className="flex cursor-pointer items-center text-[27px] font-extralight">
              <BsChat size={24} className="mr-[6px]" />
              피드백
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeProfilePanel;
