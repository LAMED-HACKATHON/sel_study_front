import Image from 'next/image';
import { RxDividerVertical } from 'react-icons/rx';

export const MenteeCard = () => {
  return (
    <div className="inline-block p-6 text-left">
      <div className="flex flex-col gap-4">
        {/* 프로필 이미지 */}
        <div className="flex-shrink-0">
          <div className="relative mx-auto h-[115px] w-[115px] overflow-hidden rounded-full">
            <Image src="https://www.loremfaces.net/96/random.jpg" alt="멘티 프로필 이미지" fill className="object-cover" sizes="96px" />
          </div>
        </div>

        {/* 프로필 정보 */}
        <div className="space-y-2 text-center">
          <h3 className="text-[32px] font-bold text-gray-900">홍길동</h3>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[16px] font-medium text-gray-600">1학년</span>
            <RxDividerVertical className="self-center text-gray-300" />
            <span className="text-[16px] text-gray-600">서울 고등학교</span>
          </div>
        </div>
      </div>
    </div>
  );
};
