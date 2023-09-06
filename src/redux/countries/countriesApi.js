import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCountries = createAsyncThunk(
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

export default fetchCountries;
