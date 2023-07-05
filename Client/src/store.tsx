import { create } from "zustand"

interface User {
    isTeacher: boolean
}

export const useStore = create<User>((set) => ({
    isTeacher: true
}))