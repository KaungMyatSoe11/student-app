import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data";

const initialState = { students: [...data] };

export const StudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    createStudent: (state, action) => {
      console.log(state, action);
    },
    deleteStudent: (state) => {
      console.log(state);
    },
  },
});

export const { createStudent, deleteStudent } = StudentSlice.actions;
export default StudentSlice.reducer;
