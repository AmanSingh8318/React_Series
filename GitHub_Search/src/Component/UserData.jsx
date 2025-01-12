import React from 'react';
import { useGitData } from '../Context/GithubInfo';
  
function UserData() {
    const{data}=useGitData();


   return(
    <div className='main'>
    <h2>Github User Information</h2>
   <div className="img-d">
       <img src={data&& data.avatar_url} alt="" />
   </div>

     <div className="info">
        <div className="one">
        <p>Name: {data&&data.name}</p>
        <p>Login: {data&&data.login}</p>
        <p>Id:{data&& data.id}</p>
        </div>
    <div className="two">
    <p>Total Repos: {data&&data.public_repos}</p>
        <p>Total Followers: {data&&data.followers}</p>
        <p> Total following: {data&&data.following}</p>
    </div>
      
     <div className="three">
        <p>Location: {data&&data.location}</p>
       
     </div>

     </div>
</div> 
   
   )
     
  
}

export default UserData
