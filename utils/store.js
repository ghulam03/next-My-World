import { create } from 'zustand'

const useSttore = create((set) => ({
  user: {},
  addUser:(userr)=>set((state)=>({...userr,...state.user})),
}))

export default useSttore;

