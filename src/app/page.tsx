import Image from 'next/image';

const Main = () => {
  console.log('api', process.env.API_URL);
  console.log('client', process.env.NEXT_PUBLIC_API_URL);

  return (
    <div className="flex min-h-screen flex-col bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <section className="container mx-auto px-4 py-12 pb-20 md:py-20 md:pb-32">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="lg:w-1/2">
            <div className="flex h-full flex-col justify-between">
              {/* 위: 텍스트 영역 */}
              <div className="space-y-6">
                <h2 className="text-4xl leading-tight font-bold tracking-normal break-keep text-black md:text-5xl lg:text-[72px] dark:text-white">수능 국영수 학습을 완성하다</h2>

                <p className="text-lg break-keep text-black dark:text-gray-300">
                  설스터디는 멘토와 멘티가 함께하는 맞춤형 코칭 플랫폼입니다. <br />
                  실시간 소통으로 학습 목표를 달성하세요.
                </p>
              </div>

              {/* 아래: 버튼 */}
              <div className="pt-4">
                <button className="text-md inline-flex min-h-[56px] items-center justify-center rounded-full bg-gray-900 px-8 py-2 font-bold text-white transition-colors hover:bg-gray-800 active:bg-black">
                  시작하기
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-2xl lg:h-105">
              <Image
                src="/images/study-image.jpg"
                alt="스터디 이미지"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="rounded-2xl object-cover"
                priority
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
