'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/service/userService';
import { useAuthStore } from '@/store/authStore';

const Login = () => {
  const router = useRouter();

  // Zustand 상태 관리
  const setUser = useAuthStore((state) => state.setUser);

  const [role, setRole] = useState<'mentor' | 'mentee'>('mentee');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const res = await login({ email, password, role });

      setUser({
        username: res.username,
        name: res.name,
        role: res.role,
        school_name: res.school_name,
        birth_date: res.birth_date,
      });

      router.push(res.role === 'mentor' ? '/mentor' : '/mentee');
    } catch (error) {
      alert('로그인 실패');
      console.error(error);
    }
  };

  return (
    <div className="flex h-[80vh] items-center justify-center font-sans">
      <div className="w-full max-w-[600px] rounded-xl px-6 py-8">
        <h3 className="mb-[59px] text-center text-[48px] font-medium">로그인</h3>

        <form onSubmit={handleSubmit}>
          {/* role 선택 */}
          <div className="mb-[50px] flex justify-center gap-[76px]">
            <label className="flex cursor-pointer items-center gap-3 rounded-[35px] border px-[25px] py-[5px] transition has-checked:bg-[#20315E] has-checked:text-white">
              <input type="radio" name="role" value="mentor" className="hidden" checked={role === 'mentor'} onChange={() => setRole('mentor')} />
              <span className="text-[22px]">멘토</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-[35px] border px-[25px] py-[5px] transition has-checked:bg-[#20315E] has-checked:text-white">
              <input type="radio" name="role" value="mentee" className="hidden" checked={role === 'mentee'} onChange={() => setRole('mentee')} />
              <span className="text-[22px]">멘티</span>
            </label>
          </div>

          {/* email */}
          <input
            placeholder="이메일"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mx-auto block w-[458px] rounded-lg bg-white px-[31px] py-[22px] text-[14px] font-medium shadow-[0_3px_10px_-3px_rgba(0,0,0,0.5)] outline-none"
          />

          {/* password */}
          <div className="mt-[51px] mb-[80px]">
            <input
              placeholder="비밀번호"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mx-auto block w-[458px] rounded-lg bg-white px-[31px] py-[22px] text-[14px] font-medium shadow-[0_3px_10px_-3px_rgba(0,0,0,0.5)] outline-none"
            />
          </div>

          <button type="submit" className="mx-auto block w-[458px] rounded-[60px] bg-[#20315E] py-[22px] text-[15px] font-semibold text-white transition hover:bg-[#18264A]">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
