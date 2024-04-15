// This is our main application file 
import React from "react";
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/Header";
import HeroSection from "./components/HeroSection";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


// making our main component of the whole application
const ApplicationWholeData=()=>{
    return (
        <>
    <HeaderComponent/>
    <HeroSection/>
        </>
    )
}

// getting root from our index.html
const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(<ApplicationWholeData/>)