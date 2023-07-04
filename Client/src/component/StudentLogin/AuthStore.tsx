import {create} from "zustand";

interface AuthStore  {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  username: "",
  password: "",
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),
}));
