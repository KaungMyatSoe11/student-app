import { configureStore } from "@reduxjs/toolkit";
import { studentApi } from "../services/studentServices";

export default configureStore({
  reducer: {
    // student: StudentReducer,
    // major: MajorReducer,
    [studentApi.reducerPath]: studentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware),
});
