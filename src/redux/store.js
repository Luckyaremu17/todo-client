import { configureStore } from '@reduxjs/toolkit';
import coreReducer from './reducers/coreSlice';

export default configureStore({
  reducer: {
    core: coreReducer
  },
});
