import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data";

const initialState = { major: data };

export const MajorSlice = createSlice({
  name: "major",
  initialState,
  reducers:{
    createMajor:(state,action)=>{
        console.log(state,action);
        
    }
  }
});


export const {createMajor}=MajorSlice.actions

export default MajorSlice.reducer
