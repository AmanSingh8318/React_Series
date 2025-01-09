import React from 'react';

import { useParams } from 'react-router-dom';
export default function UserInfo() {
    const {id}=useParams();
  return (
    <div className='bg-gray-600 p-8 text-white text-2xl text-center '>
      UserInfo:{id}
    </div>
  )
}
