import { createContext, useContext } from "react";

 
const TodoContext=createContext({
        todos:[
            {
                id:1,
                todo:"A todo msg ",
                completed:false
            }
        ],
        addTodo:(todo)=>{},
        updateTodo:(id,todo)=>{},
        delteTodo:()=>{id},
        toggleCompleted:(id)=>{}
})

// provider 

export const TodoProvider=TodoContext.Provider;

// create the custom hook to export   it 

export const useTodo=()=>{
    return useContext(TodoContext);
}