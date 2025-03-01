import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/Slice/todoSlice';

const store = configureStore({
    reducer: {
      todo: todoReducer,
    },
  });

  export default  store;