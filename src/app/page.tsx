import Image from 'next/image';
import { RiBox3Fill } from 'react-icons/ri';

const Main = () => {
  console.log('api', process.env.API_URL);
  console.log('client', process.env.NEXT_PUBLIC_API_URL);

  return (
    <div className="flex min-h-screen flex-col bg-linear-to-b from-[#F2F7FF] to-white">
      <section className="container mx-auto mt-[105px] px-[16px] py-[48px] pb-[80px] md:py-[8px] md:pb-[128px]">
        <div className="flex flex-col gap-[48px] lg:flex-row lg:gap-[64px]">
          <div className="lg:w-[50%]">
            <div className="flex h-full flex-col justify-between">
              {/* 위: 텍스트 영역 */}
              <div className="flex flex-col gap-[8px]">
                <h2 className="text-[36px] leading-tight font-bold tracking-normal break-keep text-black md:text-[48px] lg:text-[72px]">수능 국영수 학습을 완성하다</h2>
                <p className="text-[18px] break-keep text-black">
                  설스터디는 멘토와 멘티가 함께하는 맞춤형 코칭 플랫폼입니다. <br />
                  실시간 소통으로 학습 목표를 달성하세요.
                </p>
              </div>

              {/* 버튼 영역 생략 */}
            </div>
          </div>

          <div className="lg:w-[50%]">
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-2xl lg:h-105">
              <Image
                src="/images/study-image.jpg"
                alt="스터디 이미지"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="rounded-2xl object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full py-[80px] md:max-w-[1482px]">
        <div className="px-[16px]">
          <div className="mb-[48px] flex flex-col items-center gap-[11px] text-center md:mb-[132px]">
            <p className="text-[22px] text-gray-500">기능</p>
            <h2 className="text-[24px] font-bold text-gray-900 md:text-[48px]">설스터디의 핵심 기능</h2>
            <p className="text-[14px] text-gray-600 md:text-[22px]">학생 개인의 수준과 목표에 맞춘 학습 전략</p>
          </div>

          <div className="grid grid-cols-1 justify-items-center gap-[20px] md:grid-cols-3 md:gap-[48px]">
            <div className="w-full max-w-[388px] bg-[#9AA6B2] p-[32px] text-white">
              <RiBox3Fill className="mb-[14px] h-[26px] w-[26px]" />
              <h3 className="mb-[25px] text-[32px] font-semibold">수능 국영수 맞춤 코칭</h3>
              <p className="text-[18px] leading-relaxed text-white/80">
                멘토가 직접 설계한 커리큘럼으로
                <br />
                효율적인 학습 경험
              </p>
            </div>

            <div className="w-full max-w-[388px] bg-[#9AA6B2] p-[32px] text-white">
              <RiBox3Fill className="mb-[14px] h-[26px] w-[26px]" />
              <h3 className="mb-[25px] text-[32px] font-semibold">멘토와 멘티 실시간 소통</h3>
              <p className="text-[18px] leading-relaxed text-white/80">
                즉각적인 피드백과 질문 해결로
                <br />
                학습 속도 가속화
              </p>
            </div>

            <div className="w-full max-w-[388px] bg-[#9AA6B2] p-[32px] text-white">
              <RiBox3Fill className="mb-[14px] h-[26px] w-[26px]" />
              <h3 className="mb-[25px] text-[32px] font-semibold">진도와 성취도 관리</h3>
              <p className="text-[18px] leading-relaxed text-white/80">
                체계적인 추적으로 학습 진행 상황을
                <br />
                명확하게 파악
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
