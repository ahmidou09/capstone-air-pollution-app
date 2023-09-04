import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (region) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}?fields=name,latlng,area,flags`,
    );

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    return data;
  },
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;
