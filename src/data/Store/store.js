import { configureStore, createSlice } from "@reduxjs/toolkit";
//************************REDUX STORE**************************** */

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

const filterSlice = createSlice({
  name: "filterData",
  initialState: {},

  reducers: {
    setData: (state, action) => {
      const data = action.payload;
      return state=data;
    },
  },
});


const JobStore = configureStore({
  reducer: {
    Jobdata: JobDataSlice.reducer,
    filterData:filterSlice.reducer
  },
});
export const filterActionns=filterSlice.actions;
export const Jobdataactions = JobDataSlice.actions;
export default JobStore;
