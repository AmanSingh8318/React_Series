   
    //  learn how to send the data in component 
   import React, { useContext, useState } from 'react';
import UserContext from '../Context/UserContext';

   function Login() {
    const{setUser}=useContext(UserContext);

    const[userName,setUserName]=useState('');
    const[password,setPassword]=useState('');

       const submitHnadler=(e)=>{
        e.preventDefault();
        setUser(userName,password); /// sent the data to the other component 
       }
     return (
       <div>
         <input type="text"
          placeholder='enter your name '
           value={userName}
            onChange={(e)=>setUserName(e.target.value)}
             />

                <input type="text"
          placeholder='enter your name '
           value={password}
            onChange={(e)=>setPassword(e.target.value)}
             />
             <button type='submit '  onClick={submitHnadler}>Submitt</button>
       </div>
     )
   }
   
   export default Login
   