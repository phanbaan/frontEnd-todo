import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    searchText:"",
    priority:"",
    id: ""
  },
  reducers: {
    filtersSearchText: (state ,action)=> {
        state.searchText = action.payload
    },
    filterPriority: (state,action)=> {
      state.priority = action.payload
    },
    filterId: (state,action)=>{
      state.id = action.id
    }
  }
})
export const {filtersSearchText,filterPriority,filterId} = filterSlice.actions;
export default filterSlice

