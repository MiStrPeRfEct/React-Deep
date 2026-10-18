import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../app/layouts/AuthLayout'
import PublicProtected from './protected/PublicProtected'
import LoginPage from '../features/auth/ui/pages/LoginPage'
import RegisterPage from '../features/auth/ui/pages/RegisterPage'
import MainProtected from './protected/MainProtected'
import MainLayout from '../app/layouts/MainLayout'
import HomePage from '../shared/ui/pages/HomePage'
import ProductPage from '../features/products/ui/pages/ProductPage'
import OrderPage from '../features/orders/ui/pages/OrderPage'
import CartPage from '../features/cart/ui/pages/CartPage'
import { hydrateUser } from '../features/auth/api/authAPI'
import { useDispatch } from 'react-redux'
import { hydrateUserAction } from '../features/auth/state/authAction'

const AppRoutes = () => {

    let dispatch = useDispatch()
    useEffect(()=>{
        (()=>{
            try{
                dispatch(hydrateUserAction())

            }catch(err){
                console.log(err)
            }
        })
    },[])

    let router = createBrowserRouter([
        {
            path: '/',
            element: <PublicProtected/>,
            children: [
                {
                    path: "",
                    element: <AuthLayout/>,
                    children:[
                        {
                            path:"",
                            element: <LoginPage/>
                        },
                        {
                            path:"register",
                            element: <RegisterPage/>
                        },

                    ]
                    
                }
            ]

        },
        {
            path: "/main",
            element : <MainProtected/>,
            children:[
                {
                    path: "",
                    element: <MainLayout/>,
                    children :[
                        {
                            path: "",
                            element: <HomePage/>
                        },
                        {
                            path: "product",
                            element: <ProductPage/>
                        },
                        {
                            path: "orders",
                            element: <OrderPage/>
                        },
                        {
                            path: "cart",
                            element: <CartPage/>
                        },
                    ]
                }
            ]
        }

    ])
  return <RouterProvider router={router} />
}

export default AppRoutes
