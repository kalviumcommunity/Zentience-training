import { create } from 'zustand';

interface Student {
  number: number;
  Name: string;
  Rollno: number;
  Class: string;
  id:number;
}

interface StudentStore {
  students: Student[];
  candidates:Student[];
  addstudent:(student:Student) =>void;
  resetForm:() => void;
  Name: string;
  Rollno: number;
  Class: string;
  currentElementId:number;
  setName: (Name:string) => void;
  setRollno: (Rollno:number) => void;
  setClass: (Class:string)=>void,
  setcurrentElementId:(currentElementId:number)=> void;
  setcandidate: (candidates: Student[]) => void;
}


const useStudentStore = create<StudentStore>((set) => ({
  students: [],
  candidates:[],
  Name:'',
  Rollno:0,
  Class:'',
  currentElementId:0,
  setName:(Name) => set({Name}),
  setRollno:(Rollno)=> set({Rollno}),
  setClass:(Class)=> set({Class}),
  setcurrentElementId:(currentElementId)=>set({currentElementId}),
  addstudent:(student)=>
  set((state)=>({
    students:[...state.students,student]
  })),
  resetForm:()=>set({students:[]}),
  setcandidate: (candidates) => set({ candidates }),
 
}));


export default useStudentStore;



export {};
