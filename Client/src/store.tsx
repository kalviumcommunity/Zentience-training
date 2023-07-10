import {create} from 'zustand';

type userStoreState = {
  isTeacher: boolean;
  setIsTeacher: (value: boolean) => void;
};

const useUserStore = create<userStoreState>((set) => ({
  isTeacher: false,
  setIsTeacher: (value) => set((state) => ({ ...state, isTeacher: value })),
}));

export default useUserStore;