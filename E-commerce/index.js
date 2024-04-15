import React from "react";
import ReactDOM from "react-dom/client"
import { HeaderComponent } from "./src/components/HeaderComponent";
import { HeroSection } from "./src/components/HeroSection";
import { FooterLayout } from "./src/components/Footer";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import { AllProductsPage } from "./src/components/AllProducts";
import { ContactPage } from "./src/components/Contact";
import { HelpPage } from "./src/components/Help";
import { AboutPage } from "./src/components/About";



// Let me create a full app component 
const FullApplicationArea=()=>{
    return (
        <>
        <HeaderComponent/>
        <HeroSection/>
        <FooterLayout/>
        </>
    )
}

const ApplicationRouter = createBrowserRouter([
    {
        path:"/",
        element:<FullApplicationArea/>
    },
    {
        path:"/About",
        element:<AboutPage/>
    }
    ,
    {
        path:"/AllProduct",
        element:<AllProductsPage/>
    },
    {
        path:"/Contact",
        element:<ContactPage/>
    },
    {
        path:"/Help",
        element:<HelpPage/>
    }

])

// This is the main root of the aplication where we have to render our all components
const rootOfApplication=ReactDOM.createRoot(document.querySelector(".container"));
rootOfApplication.render(<RouterProvider router={ApplicationRouter}/>);