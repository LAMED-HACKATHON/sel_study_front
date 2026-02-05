import axios, { AxiosRequestHeaders, Method } from 'axios';

const useAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8;',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
  timeout: 20000,
});

useAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.log('axios error', error);
    }
    return Promise.reject(error);
  },
);

interface RequestConfig<DATA> {
  method: Method;
  url: string;
  data?: DATA;
  header?: AxiosRequestHeaders;
}

const request = async <T, DATA>({ method, url, data, header }: RequestConfig<DATA>): Promise<T> => {
  const response = await useAxios.request<T>({
    url,
    headers: { ...header },
    method,
    data,
  });
  return response.data;
};

export default request;
