import { createContext, useContext } from "react";

 const GithubContext=createContext({
    fetchGitData:()=>{}
 })

 export const Gitprovider=GithubContext.Provider;


 export const useGitData=(userName)=>{
    return useContext(GithubContext);
 }