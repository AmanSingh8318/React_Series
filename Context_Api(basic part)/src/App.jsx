import React from 'react'
import Login from './Componenet/Login'
import Profile from './Componenet/Profile'
import UserContextProvider from './Context/UserContextProvider'
function App() {
  return (
    <UserContextProvider>
      <h2>helo</h2>
      <Login/>
      <Profile/>
     </UserContextProvider>
  )
}

export default App
