import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data";
import { createStudent, fetchStudents } from "../../api/student";

const initialState = { students: [], loading: false, error: "" };

export const StudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students = [...state.students, action.payload];
    },
    deleteStudent: (state, action) => {
      const filterStudent = state.students.filter(
        (st) => st._id != action.payload
      );
      state.students = [...filterStudent];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        console.log(action);
        
        state.error = action.error.message;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students = [...state.students, action.payload];
      });
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        console.log(action);
        
        state.error = action.error;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = [...action.payload];
      });
  },
});

export const { addStudent, deleteStudent } = StudentSlice.actions;
export default StudentSlice.reducer;
