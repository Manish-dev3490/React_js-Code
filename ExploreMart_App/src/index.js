// This is our main application file 
import React from "react";
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer"
import Contact from "./components/Contact";
import About from "./components/About";
import AllProduct from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



// making our main component of the whole application
const ApplicationWholeData = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet></Outlet>
           
        </>
    )
}


// Creating a application router for making routes in our application
const ApplicationRouter = createBrowserRouter([
    {
        path: "/",
        element: <ApplicationWholeData />,
        children:[
            {
                path:"/",
                element:[<HeroSection></HeroSection> , <Footer></Footer>]
            },
            {
                path:"/About",
                element:<About></About>
            },
            {
                path:"/Contact",
                element:<Contact></Contact>
            },
            {
                path:"/AllProduct",
                element:<AllProduct></AllProduct>
            },
            {
                path:"/ProductDetail/:resId",
                element:<ProductDetail></ProductDetail>
            }
        ],
        errorElement:<Error></Error>
    }
    
    
])


// getting root from our index.html
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={ApplicationRouter}></RouterProvider>)