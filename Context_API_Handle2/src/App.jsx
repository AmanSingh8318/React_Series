import { useEffect, useState } from 'react'
import './App.css'
import Pookie_card from './Component/Pookie_card'
import { ContextProvider } from './Contexts/Context'
function App() {
  const [data,setData] = useState([])
   
 
  const getPokkie_Data=()=>{
    useEffect(()=>{
      let url='https://dummy-json.mock.beeceptor.com/todos';
      fetch(url)
      .then((res)=>res.json())
      .then((res_data)=>{
        console.log(res_data);
        
        setData(res_data);
      })
      
    },[])
    
  }
  getPokkie_Data(data);

  
  return (
   
   <ContextProvider value={{getPokkie_Data,setData,data}}>
   <h2>
    Handle API
    <Pookie_card/>
    {/* <Pookied_All_Info/> */}
   </h2>
   </ContextProvider>
  )
}

export default App
