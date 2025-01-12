import React, { useState } from 'react';
import { useGitData } from '../Context/GithubInfo';

function Input() {
    const {setData,fetchGitData,data}=useGitData();
     const[input,setInput]=useState("");

      const handleSubmit=(e)=>{
        // setData(input);
          
        e.preventDefault();
        fetchGitData(input);
        setInput("");
      }
  return (
    <div className='main_form'>
        <form action="" onSubmit={handleSubmit}>
         <input type="text"
         placeholder='Enter your Github UserName'
         value={input}
         onChange={(e)=>setInput(e.target.value)}
          />
          <input type='submit'value="search"  />
          </form>
    </div>
  )
}

export default Input
