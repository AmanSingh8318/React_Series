
import React, { useState } from 'react'
function App() {
  const [color,setColor]=useState("black")
  return (
    <div id='main' style={{background:color}}>
        <button style={{background:color}} onClick={()=>setColor("red") }>Red</button>  
        <button onClick={()=>setColor("blue")}>Blue</button> 
        <button onClick={()=>setColor("green")}>Green</button>   
        <button onClick={()=>setColor("lightGreen")}>lightGreen</button>
    </div>
  )
}

export default App
