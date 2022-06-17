import {createSelector} from "@reduxjs/toolkit"

const todoSelector = (state)=>state.todos;
const searchTextSelector = state =>state.filters.searchText ;
const fillterPrioritySelector = state =>state.filters.priority;
export const todosSelector  = createSelector(todoSelector, searchTextSelector,fillterPrioritySelector,(todos,searchText,priority)=>{
  return todos.filter((todo)=>todo.name.includes(searchText))
})
