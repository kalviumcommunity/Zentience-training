import {create} from 'zustand';

interface AnnouncementStore {
    title: string;
    description: string;
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    resetForm: () => void;
  }
  
  const useAnnouncementStore = create<AnnouncementStore>((set) => ({
    title: '',
    description: '',
    setTitle: (title) => set({ title }),
    setDescription: (description) => set({ description }),
    resetForm: () => set({ title: '', description: '' }),
  }));


  export default useAnnouncementStore;