import { create } from 'zustand';

interface Student {
  Name: string;
  Rollno: number;
  Class: string;
  _id:number;
  Teachername:string;
}

interface StudentStore {
  students: Student[];
  candidates:Student[];
  addstudent:(student:Student) =>void;
  resetForm:() => void;
  Name: string;
  Rollno: number;
  Class: string;
  email:string;
  password:string;
  currentElementId:number;
  setName: (Name:string) => void;
  setRollno: (Rollno:number) => void;
  setClass: (Class:string)=>void,
  setcurrentElementId:(currentElementId:number)=> void;
  setcandidate: (candidates: Student[]) => void;
  setemail: (email:string)=> void;
  setpassword: (password:string)=> void;
}


const useStudentStore = create<StudentStore>((set) => ({
  students: [],
  candidates:[],
  Name:'',
  Rollno:0,
  Class:'',
  email:'',
  password:'',
  currentElementId:0,
  setName:(Name) => set({Name}),
  setRollno:(Rollno)=> set({Rollno}),
  setClass:(Class)=> set({Class}),
  setemail:(email)=> set({email}),
  setpassword:(password)=> set({password}),
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
