// userService
import request from '@/lib/hook/useAxios';

export const getUserProfile = async () => {
  return request({
    url: '/user/profile',
    method: 'GET',
  });
};
