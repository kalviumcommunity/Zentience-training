import { create } from 'zustand';

interface Student {
  number: number;
  Name: string;
  Rollno: number;
  Class: string;
}

interface StudentStore {
  students: Student[];
  deleteStudent: (rollNo: number) => void;
  editStudent: (rollNo: number, updatedData: Partial<Student>) => void;
  addStudent: (student: Student) => void;
}

const initialData: { studentData: Student[] } = require('../../studentData.json');
const initialStudents = initialData.studentData;

const useStudentStore = create<StudentStore>((set) => ({
  students: initialStudents,
  deleteStudent: (rollNo) =>
    set((state) => ({
      students: state.students.filter((student) => student.Rollno !== rollNo),
    })),
  editStudent: (rollNo, updatedData) =>
    set((state) => ({
      students: state.students.map((student) =>
        student.Rollno === rollNo ? { ...student, ...updatedData } : student
      ),
    })),
  addStudent: (newStudent) =>
    set((state) => ({ students: [...state.students, newStudent] })),
}));

export default useStudentStore;



export {};
