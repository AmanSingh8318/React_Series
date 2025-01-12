import React from 'react';
import { useApiData } from '../Contexts/Context';
function Pookie_card() {

    const {data=[],setData}=useApiData();

    console.log("Data in new Componenet",data);
    
    
    
  return (
    <div className='card'>
       <div className="img">
<img src="img_girl.jpg" alt="Emploee IMG" width="500" height="600"/>
       </div>
       {data && data.length > 0 ? (
      <>
        <p>Id: {data[0].userId}</p>
        <p>Title: {data[0].title}</p>
      </>
    ) : (
      <p>Loading data or no data available...</p>
    )}
    </div>
  )
}

export default Pookie_card
