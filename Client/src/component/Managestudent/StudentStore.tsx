import { create } from 'zustand';

interface Student {
  number: number;
  Name: string;
  Rollno: number;
  Class: string;
}

interface StudentStore {
  students: Student[];
  candidates:Student[];
  addstudent:(student:Student) =>void;
  resetForm:() => void;
  Name: string;
  RollNo: string;
  Class: string;
  setName: (Name:string) => void;
  setRollNo: (RollNo:string) => void;
  setClass: (Class:string)=>void,
  setcandidate: (candidates: Student[]) => void;
}


const useStudentStore = create<StudentStore>((set) => ({
  students: [],
  candidates:[],
  Name:'',
  RollNo:'',
  Class:'',
  setName:(Name) => set({Name}),
  setRollNo:(RollNo)=> set({RollNo}),
  setClass:(Class)=> set({Class}),
  addstudent:(student)=>
  set((state)=>({
    students:[...state.students,student]
  })),
  resetForm:()=>set({students:[]}),
  setcandidate: (candidates) => set({ candidates }),
 
}));


export default useStudentStore;



export {};
