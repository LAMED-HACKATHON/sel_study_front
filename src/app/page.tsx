import Image from 'next/image';

const Main = () => {
  console.log('api', process.env.API_URL);
  console.log('client', process.env.NEXT_PUBLIC_API_URL);

  return (
    <div className="flex min-h-screen flex-col bg-linear-to-b from-[#F2F7FF] to-white">
      <section className="container mx-auto px-[16px] py-[48px] pb-[80px] md:py-[8px] md:pb-[128px]">
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
    </div>
  );
};

export default Main;
