import {create} from "zustand"

const useStoree = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation:() => set((state) =>( { bears:state.bears -1})),
  removeAllBears: () => set({ bears: 0 }),
}))

export default useStoree;



// const id=req.query.id
