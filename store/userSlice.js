import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 5,
  name: "in-adil",
  email: "in-default@default",
  password: "in-def",
  age: 10,
  country: "in-india",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.id=action.payload.id,
      state.name=action.payload.name,
      state.email=action.payload.email,
      state.password=action.payload.password,

      state.age=action.payload.age,
      state.country=action.payload.country
    },
      // state.user = {
      //   id: action.payload.id,
      //   name: action.payload.name,
      //   email: action.payload.email,
      //   password: action.payload.password,
      //   age: action.payload.age,
      //   country: action.payload.country,
      // };
      
    deleteUser: (state) => {
      state.id=5,
      state.name="rei-adil",
      state.email="rei-em",
      state.password=123124,
      state.age=1212,
      state.country="re-ind"
    }
  }
});
export default userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions;
