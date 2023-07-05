import {create} from 'zustand';

type userStoreState = {
  isTeacher: boolean;
  setIsTeacher: (value: boolean) => void;
};

const useUserStore = create<userStoreState>((set) => ({
  isTeacher: true,
  setIsTeacher: (value) => set((state) => ({ ...state, isTeacher: value })),
}));

export default useUserStore;