import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data";

const initialState = { students: [...data] };

export const StudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    createStudent: (state, action) => {
      state.students = [...state.students, action.payload];
    },
    deleteStudent: (state, action) => {
      const filterStudent = state.students.filter(
        (st) => st._id != action.payload
      );
      state.students = [...filterStudent];
    },
  },
});

export const { createStudent, deleteStudent } = StudentSlice.actions;
export default StudentSlice.reducer;
