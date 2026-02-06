const Login = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center font-sans dark:bg-black">
      <div className="w-full max-w-[400px] rounded-xl px-6 py-8">
        <h3 className="mb-6 text-center text-3xl font-bold">로그인</h3>
        <form>
          {/* radio button mentor/mentee */}
          <div className="mt-3 mb-6 flex justify-center gap-3">
            <label className="flex cursor-pointer items-center gap-3 rounded-full border border-gray-300 px-6 py-2 transition has-checked:border-gray-900 has-checked:bg-gray-900 has-checked:text-white">
              <input type="radio" name="role" value="mentor" className="hidden" />
              <span className="text-sm font-bold">멘토</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-full border border-gray-300 px-6 py-2 transition has-checked:border-gray-900 has-checked:bg-gray-900 has-checked:text-white">
              <input type="radio" name="role" value="mentee" defaultChecked className="hidden" />
              <span className="text-sm font-bold">멘티</span>
            </label>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">이메일</label>
              <input type="text" required className="w-full rounded-lg border border-gray-300 px-3 py-2 transition outline-none focus:border-[#20315E] focus:ring-2 focus:ring-[#20315E]/40" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">비밀번호</label>
              <input type="password" required className="w-full rounded-lg border border-gray-300 px-3 py-2 transition outline-none focus:border-[#20315E] focus:ring-2 focus:ring-[#20315E]/40" />
            </div>

            <button type="submit" className="w-full cursor-pointer rounded-3xl bg-[#20315E] px-4 py-2 font-semibold text-white transition hover:bg-[#18264A]">
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
