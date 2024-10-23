import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "../features/student/StudentSlice";
import MajorReducer from "../features/major/MajorSlice";

export default configureStore({
  reducer: {
    student: StudentReducer,
    major: MajorReducer,
  },
});
