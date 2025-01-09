import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
function Github() {
  const data=useLoaderData();
    // const[data,setData]=useState([]);
    //  useEffect(()=>{
    //   fetch(`https://api.github.com/users/AmanSingh8318`)
    //   .then((res)=>res.json())
    //   .then((data)=>{
    //     setData(data);
    //     return data;
    //   })
    //  },[])
  return (
    <div className="bg-gray-600 text-white text-2xl p-8 text-center m-4 rounded-xl">
    <div className="flex flex-col items-start space-y-2">
      <p className="font-semibold">Login_Id: <span className="font-normal text-black">{data.login}</span></p>
      <p className="font-semibold">Name: <span className="font-normal text-black">{data.name}</span></p>
      <p className="font-semibold">Github_Followers: <span className="font-normal text-black">{data.followers}</span></p>
      <p className="font-semibold">Github_Following: <span className="font-normal text-black">{data.following}</span></p>
      <p className="font-semibold">Repo_urls:<NavLink ><span className="font-normal text-black">{data.repos_url}</span></NavLink></p>

      <img 
        src={data.avatar_url}
        alt="a github profile"
        height={200}
        width={300}
        className="flex items-center "
      />
    </div>
   

  </div>
  
  )
}

export default Github

export const githubDataLoader=async()=>{
   const res=await fetch(`https://api.github.com/users/AmanSingh8318`)
   return res.json();
}
