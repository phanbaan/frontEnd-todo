import {createSelector} from "@reduxjs/toolkit"

const todoSelector = (state)=>state.todos;
const searchTextSelector = state =>state.filters.searchText ;
const sortStatusSelector = state =>state.filters.sortStatus;
export const couterSelector = state =>state.filters.couter;
export const isLoggedInSelector = state =>state.user.isLoggedIn
export const userSelector = state =>state.user.user

export const todosSelector  = createSelector(todoSelector, searchTextSelector,sortStatusSelector,(todos,searchText,sortStatus)=>{
  if(sortStatus){
     return todos.filter((todo)=>{
      return todo.name.includes(searchText) && todo.priority ===true; 
    }) 
  }else {
    return todos.filter((todo)=>todo.name.includes(searchText))
  }
})
