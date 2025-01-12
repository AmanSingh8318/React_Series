  import { createContext, useContext } from "react";
//   const[data,setData]=useState([]);
  export const Result_APi=createContext({

      getPokkie_Data:()=>{}
      
  })

   export const ContextProvider=Result_APi.Provider;

    // create custom hoo to export 

    export  const useApiData=()=>{
         return useContext(Result_APi);
    }