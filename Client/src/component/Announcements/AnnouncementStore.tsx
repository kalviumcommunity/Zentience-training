
import { create } from 'zustand';

interface Announcement {
  id: number;
  title: string;
  description: string;
  
}

interface AnnouncementStore {
  announcements: Announcement[];
  addAnnouncement: (announcement: Announcement) => void;
  resetForm: () => void;
  title: string;
  description: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
}

const useAnnouncementStore = create<AnnouncementStore>((set) => ({
    title: '',
    description: '',
    setTitle: (title) => set({ title }),
    setDescription: (description) => set({ description }),
  announcements: [],
  addAnnouncement: (announcement) =>
    set((state) => ({
      announcements: [...state.announcements, announcement],
    })),
  resetForm: () => set({ announcements: [] }),
}));

export default useAnnouncementStore;
