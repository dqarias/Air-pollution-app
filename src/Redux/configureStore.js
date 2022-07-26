import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from './Countries/countries';

const store = configureStore({
  reducer: {
    countries: countriesSlice,
  },
});

export default store;
