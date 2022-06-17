import { configureStore } from '@reduxjs/toolkit'
import filterSlice from '../features/dashboard/filterSlice';
import todosReducer from  "../features/dashboard/todoSlice";
export default configureStore({
  reducer: {
    todos: todosReducer,
    filters: filterSlice.reducer
  }
})