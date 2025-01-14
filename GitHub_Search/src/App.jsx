import { useState } from 'react';
import './App.css';
import Input from './Component/Input';
import UserData from './Component/UserData';
import { Gitprovider } from './Context/GithubInfo';
function App() {

  const[data,setData]=useState([]);

  const fetchGitData=(userName)=>{
    let url = `https://api.github.com/users/${userName}`;
    
        fetch(url).
        then((res)=>{
            if (!res.ok) {
              alert("Pls Enter the valid userName");
              return
            }
       return res.json()
        })
        .then((res)=>(
        
          
          setData(res) 
        ))
  
        console.log(data);
        


  }
  // fetchGitData(data);

  return (
<Gitprovider value={{fetchGitData ,data,setData}}>
<div className="app-container">
       <Input />

        <UserData />
      </div>
</Gitprovider>
  )
}

export default App
