import React from 'react';
import { useApiData } from '../Contexts/Context';
function Pookied_All_Info() {
    const{data}=useApiData();
  return (
    <div>
      {/* <h2>{data[0].id}</h2> */}
    </div>
  )
}

export default Pookied_All_Info
