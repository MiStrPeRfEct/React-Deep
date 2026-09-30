import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import App from '../App'
let About = lazy(()=>import('../pages/About'))// lazy use for click to load pages to make more efficient site
let Contact = lazy(()=>import('../pages/Contact'))// this lazy thing's uses known as code splitting, 
const AppRoutes = () => {

    let router = createBrowserRouter([
        {
            path: "/",
            element:<MainLayout/>,
            children:[
                {
                    path:"",
                    element:<App/>
                },
                {
                    path:"about",
                    loader:  getData,
                    hydratefallbackElement:<h1>Loading...</h1>,
                    element:<Suspense fallback={<h1>Loading...</h1>}>
                        <About/>
                    </Suspense>
                },
                {
                    path:"contact",
                    element:<Suspense fallback={<h1>Loading...</h1>}>
                        <Contact/>
                    </Suspense>
                }
            ] 
        
        }
    ])
  return <RouterProvider router={router} />
  
}

export default AppRoutes
