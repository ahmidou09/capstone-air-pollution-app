import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countriesSlice';
import airPollutionReducer from './airPollution/airPollutionSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    airPollution: airPollutionReducer,
  },
});

export default store;
