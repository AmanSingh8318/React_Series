 

  /// learn how to get data 

  import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';
  function Profile() {

     const{user}=useContext(UserContext);  // get the value 
      
      if (!user) {
        return <div>please login </div>
      }else {
        return <div>Welcome: {user}</div>
      }
  }
   
  export default Profile
  