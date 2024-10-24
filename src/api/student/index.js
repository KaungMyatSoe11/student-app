import { createAsyncThunk } from "@reduxjs/toolkit";

export const createStudent = createAsyncThunk(
  "student/createStudent",
  async (newStudent) => {
    const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });

    const data = await res.json();

    return data.student;
  }
);

export const fetchStudents = createAsyncThunk(
  "student/fetchStudents",
  async () => {
    const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/students`, {
      method: "GET",
      headers: {},
    });

    const data = await res.json();

    return data.students;
  }
);
