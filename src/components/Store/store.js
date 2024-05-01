import { configureStore, createSlice } from "@reduxjs/toolkit";

const JobDataSlice = createSlice({
  name: "Jobdata",
  initialState: [],

  reducers: {
    setData: (state, action) => {
      const data = action.payload;
      const jobdata = JSON.parse(data);
      const Joblist = jobdata.jdList;
      state.push(...Joblist);
    },
  },
});

const JobStore = configureStore({
  reducer: {
    Jobdata: JobDataSlice.reducer,
  },
});

export const Jobdataactions = JobDataSlice.actions;
export default JobStore;
