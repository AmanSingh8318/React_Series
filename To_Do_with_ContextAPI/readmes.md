import { useState } from 'react';
import './App.css';
import { TodoProvider } from './Contexts/TodoContext';

function App() {
 const[todos,setTodos]=useState([]);
   
  // add the todo 
  const addTodo=(todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=>{}))
  }

  const updateTodo=(todo,id)=>{
    setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id===id ?todo:prevTodo));
  }

  const delteTodo=(id)=>{
     setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!=id));
  }


  return
  (
    <TodoProvider value={{todos,addTodo,updateTodo,delteTodo,toggleCompleted}} >
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
