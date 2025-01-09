import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Github, { githubDataLoader } from './Component/Github/Github'
import Home from './Component/Home/Home'
import Layout from './Component/Layout/Layout'
import UserInfo from './Component/User/UserInfo'

function App() {
//  const router=createBrowserRouter([{
//    path:"/",
//    element:<Layout/>,
//    children:[{
//       path:"",
//       element:<Home/>
//           },
//           {
//             path:"/about",
//             element:<About/>
//           }

//           ,{
//     path:"/contact",
//     element:<Contact/>
//               },

//               {
//                 path:"/github",
//                 element:<Github/>
//               }
//   ],
  
//  }])   

    const router=createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route
             loader={githubDataLoader}
          path='/github' element={<Github/>}/>
          <Route path='user/:id' element={<UserInfo/>}/>
        </Route>
      )
    )
  return (
    <>

      {/* <h2 className='bg-red-800'>Hello from router </h2> */}
    <RouterProvider router={router}/>
    </>
  )
}

export default App
