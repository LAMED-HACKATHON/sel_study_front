const Main = () => {
  console.log('api', process.env.API_URL);
  console.log('client', process.env.NEXT_PUBLIC_API_URL);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">고등학생을 위한 맞춤형 스터디 플랫폼</h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">필요한 과목, 원하는 시간, 적합한 멘토를 찾아보세요. 설 스터디가 여러분의 학습 여정을 돕겠습니다.</p>
        </div>
      </main>
    </div>
  );
};

export default Main;
