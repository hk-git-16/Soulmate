import { configureStore } from '@reduxjs/toolkit';
import exampleSlice from './exampleSlice'; // Import your slices here

const store = configureStore({
  reducer: {
    example: exampleSlice, // Add your slices here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
