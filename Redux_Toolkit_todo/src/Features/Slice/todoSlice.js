
 import { createSlice, nanoid } from "@reduxjs/toolkit";

 const initialState={
    todos:[

    ],
 };


   const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload.text
            };
            state.todos.push(todo);
        },
        delTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>(todo.id!==action.payload));
        },
    },
   })

 export  const {addTodo,delTodo}=todoSlice.actions;

   export default todoSlice.reducer;