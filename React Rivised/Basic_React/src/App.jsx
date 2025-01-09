import React, { useState } from 'react';

function App() {

   const [counter,setcounter]=useState(0);
  return (
    <div>
      <button onClick={()=>setcounter(counter+1)}>click
         {counter}</button>

         <button onClick={()=>setcounter(counter-1)}>dec {counter}</button>
       <h2>A react page </h2>
    </div>
  )
}

export default App
