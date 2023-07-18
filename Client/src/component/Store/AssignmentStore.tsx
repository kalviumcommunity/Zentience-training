import { create } from 'zustand';

interface Assignment {
  id: number;
  title: string;
  description: string;
  subject: string;
  fileFormat: string
}

interface AssignmentStore {
  assignments: Assignment[];
  fetchAssignments: () => Promise<void>;
  title: string;
  description: string;
  subject: string;
  fileFormat: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setSubject: (subject: string) => void;
  setFileFormat: (fileFormat: string) => void;
  resetForm: () => void;
}

const useAssignmentStore = create<AssignmentStore>((set) => ({
  title: '',
  description: '',
  subject: '',
  fileFormat: '',
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setSubject: (subject) => set({ subject }),
  setFileFormat: (fileFormat) => set({ fileFormat }),
  assignments: [],

  fetchAssignments: async () => {
    try {
      const response = await fetch('http://localhost:3001/assignments');
      const data = await response.json();
      set({ assignments: data });
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  },

  resetForm: () => {
    set({ title: '', description: '', subject: '', fileFormat: '' });
  },
}));

export default useAssignmentStore;
