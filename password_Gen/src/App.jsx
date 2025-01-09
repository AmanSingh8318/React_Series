import { React, useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {  

  const [length,setLength]=useState(8);
  const[noAllowed,setNoAllowed]=useState(false);
  const[charallowed,setCharallowed]=useState(false);
  const[password,setPassword]=useState("");

  let genrated_Password=useCallback(()=>{

      let pass="";
      let str="ABCEDFGHIJKLMOPQRSTUVWXYZ";
            if (noAllowed) {
              str+="1234567890";
            }

        if(charallowed){
          str+="!@#$%^&*()?{}";
        }
            
             for(let i=1;i<length;i++){
              let curr_pass=Math.floor(Math.random()*str.length+1);
              pass+=str.charAt(curr_pass);
             }
             setPassword(pass);
  },[length,noAllowed,charallowed])

                    // store the useref in variable                                 
                            const copyied_pass=useRef(0);
                            function copytoCipboard(){
                              copyied_pass.current?.select(); // select copied value
                              copyied_pass.current?.setSelectionRange(0,8);  // set the ranges for  copy the password
                              window.navigator.clipboard.writeText(password);
                              // alert("text is copied")
                            }
        useEffect(()=>{
          genrated_Password();
        },[length,noAllowed,charallowed])
     
  return (
    <>
      <div className='main'>
        <h2>Password Generator</h2>
        <div className='box'>
          <div>
            <input type="text"
             placeholder=" password"
             value={password}
             readOnly
             ref={copyied_pass} // give reference to useref for copy
      />
            <button
            onClick={copytoCipboard}  // add a onclick handler when we click on the button to copied the text
            >Copy</button>
          </div>
          <div>
            <input type="range"
              value={length} 
              min={8}
              max={20}
              onChange={(e)=>{setLength(e.target.value)}}
              />
            <label htmlFor="">Length {length}</label>
          </div>
           <div>
            <input type="checkbox" 
              value={charallowed}

               onChange={()=>setCharallowed((prev)=>!prev)}
                 
                />
            <label htmlFor="">Character</label>
           </div>
           <div>
            <input type="checkbox"
            defaultChecked={noAllowed}
              onChange={()=>setNoAllowed((prev)=>!prev)}
              />

            <label htmlFor="">Number</label>
           </div>
        </div>
      </div>
    </>
  );
}

export default App;
