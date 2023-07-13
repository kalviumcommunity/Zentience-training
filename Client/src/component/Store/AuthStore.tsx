import { create } from "zustand";

type AuthStore = {
  username: string;
  password: string;
  error: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setError: (error: string) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  username: "",
  password: "",
  error: "",
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),
  setError: (error) => set({ error }),
}));

export default useAuthStore;
