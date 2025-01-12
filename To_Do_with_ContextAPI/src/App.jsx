import React, { useEffect, useState } from 'react';
import TodoForm from './Component/TodoForm';
import TodoItem from './Component/TodoItem';
import { TodoProvider } from './Contexts/TodoContext';
function App() {
  const[todos,setTodos]=useState([]);
   
  // add the todo 
  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now,...todo},...prev])
  }

  const updateTodo=(todo,id)=>{
    setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id===id ?{...todo}:prevTodo));
  }

  const delteTodo=(id)=>{
     setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!=id));
  }

  const toggleCompleted=(id)=>{
    console.log("first id ",id);
      setTodos((prev)=>
      prev.map((prevTodo)=>
      prevTodo.id===id ? {...prevTodo, completed:!prevTodo.completed}:prevTodo))
  }


  // introducing the local storage
  
  // get the item 
    useEffect(()=>{
      let todos_val=JSON.parse(localStorage.getItem("todos"));
       if (todos_val && todos_val.length>0) {
        setTodos(todos_val)
       }
    },[]);

 // set the item in the local storage 
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,delteTodo,updateTodo,toggleCompleted}}>
    <div className="bg-[#172842] min-h-screen py-12">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                        <div key={todo.id} className='w-full'>
                          <TodoItem todo={todo}/>  
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            </TodoProvider>
  )
}

export default App
