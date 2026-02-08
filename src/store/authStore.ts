import { baseStore } from '@/store/store';

interface User {
  username: string;
  name: string;
  role: 'mentor' | 'mentee';
  school_name: string | null;
  birth_date: string | null;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useAuthStore = baseStore<AuthState>((set, get) => ({
  isLoggedIn: false,
  user: null,

  setUser: (user) =>
    set({
      user,
      isLoggedIn: true,
    }),

  clearUser: () =>
    set({
      user: null,
      isLoggedIn: false,
    }),
}));
