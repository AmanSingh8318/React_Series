import { createContext, useContext } from "react";

  export const  themeContext=createContext({
    themeMode:"light",
    lightTheme:()=>{},
    darkTheme:()=>{}
  })


  export const ThemeProvider=themeContext.Provider;


  // custom hook to export it 
  
  export   const Usetheme=()=>{
       
    return useContext(themeContext);
  }