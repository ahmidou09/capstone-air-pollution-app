import { createSlice } from '@reduxjs/toolkit';
import fetchAirPollution from './airPollutionApi';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const airPollutionSlice = createSlice({
  name: 'airPollution',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirPollution.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAirPollution.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchAirPollution.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
  },
});

export default airPollutionSlice.reducer;
