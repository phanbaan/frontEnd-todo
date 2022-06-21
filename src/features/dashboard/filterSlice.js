import { createSlice } from '@reduxjs/toolkit';


export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    searchText:"",
    priority:"",
    todoEdit: {},
    sortStatus:false,
    couter:2,
  },
  reducers: {
    filtersSearchText: (state ,action)=> {
        state.searchText = action.payload
    },
    filterStatus : (state,action) =>{
      state.sortStatus = action.payload
    },
    incrementCouter: (state,action)=>{
      state.couter = state.couter +1;
    },
    decrementCouter: (state,action)=>{
      state.couter = state.couter - 1;
    },
    filterTodoEdit: (state,action)=>{
      state.todoEdit = action.payload
    }
  }
})
export const {filtersSearchText,couterTodo,filterStatus,incrementCouter,decrementCouter ,filterTodoEdit} = filterSlice.actions;
export default filterSlice

