import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {id:1,name:"learn javascript",priority:false,completed:true},
    {id:2,name:"hello",priority:true,completed:false}
    ],
  reducers: {
    addTodo: (state ,action)=> {
        state.push(action.payload)
    },
    editTodo:(state,action)=>{
      console.log(state,action)
        const todos =action.payload;
        let editTodo =state.find(todo=>todo.id===todos.id);
        editTodo.id = todos.id;
        editTodo.name = todos.name;   
        
        return state;
    },
    removeTodo: (state,action)=>{
        const todoId  = action.payload;
        return state.filter((todo)=>todo.id !== todoId);
    },
    EditCheck: (state,action)=>{
      const id =action.payload;
      const edit = state.find(todo=>todo.id===id)
      edit.completed = !edit.completed;
      return state;
    },
    editStar :(state,action)=>{
      const id =action.payload;
      const edit = state.find(todo=>todo.id===id)
      edit.priority = !edit.priority;
      return state;
    }
  }
})

const {reducer,actions} = todoSlice
export const { addTodo ,removeTodo,EditCheck,editStar,editTodo} = actions

export default reducer