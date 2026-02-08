// userService
import request from '@/lib/hook/useAxios';

// 로그인 API 요청
interface LoginRequest {
  email: string;
  password: string;
  role: 'mentor' | 'mentee';
}

export interface LoginResponse {
  success: boolean;
  username: string;
  name: string;
  school_name: string | null;
  birth_date: string | null;
  role: 'mentor' | 'mentee';
}

export const login = async (data: LoginRequest) => {
  return request<LoginResponse, LoginRequest>({
    url: '/api/users/login',
    method: 'POST',
    data,
  });
};

// User profile API 요청
export const getUserProfile = async () => {
  return request({
    url: '/user/profile',
    method: 'GET',
  });
};
