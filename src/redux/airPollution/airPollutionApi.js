import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchAirPollution = createAsyncThunk(
  'airPollution/fetchAirPollution',
  async ({ lat, lon }) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=1d1d9e533d0b8b9f372b4f4b9a24b5ac`,
    );
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();

    return data;
  },
);

export default fetchAirPollution;
