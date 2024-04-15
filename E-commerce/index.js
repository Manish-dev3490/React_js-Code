import React from "react";
import ReactDOM from "react-dom/client"
import { HeaderComponent } from "./src/components/HeaderComponent";
import { HeroSection } from "./src/components/HeroSection";
import { FooterLayout } from "./src/components/Footer";
import { createBrowserRouter } from "react-router-dom";



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
        path:"/About"
    }
])

// This is the main root of the aplication where we have to render our all components
const rootOfApplication=ReactDOM.createRoot(document.querySelector(".container"));
rootOfApplication.render(<FullApplicationArea/>);