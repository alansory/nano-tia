import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../reducers/newsReducers';

const store = configureStore({
  reducer: {
    news: newsReducer, 
  },
});

export default store;
