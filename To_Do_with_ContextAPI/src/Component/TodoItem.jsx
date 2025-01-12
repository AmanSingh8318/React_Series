import { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";

function TodoItem({ todo }) {
    
    const[editable,setEditable]=useState(false);
    // const[completed,setisCompelted]=useState("");
    const[todoMsg,setTodoMsg]=useState(todo.todo)
        const{updateTodo,delteTodo,toggleCompleted}=useTodo();

        const editTodo=()=>{
           updateTodo(todo.id,{...todo,todo:todoMsg})
           setEditable(false);
        }

        const toggleComplete=()=>{

               console.log("id in other comp ",todo.id);
               
           toggleCompleted(todo.id)
        }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleComplete}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    editable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!editable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (editable) {
                        editTodo();
                    } else setEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {editable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => delteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
