import React from 'react'
import Props from './Componenets/Props'
function App() {

    const user_Info={
      name:"aman singh",
      age:21,
      gen:"male"
    }
  return (
<>
    <h2>:Props</h2>

    <Props  name="cat" btn_Text="click Me!"/>

    <Props name="Aman Singh" btn_Text="Hover me"/>
  </>

  )
}

export default App
