import React from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./src/components/HeaderComponent";
import { BodyComponent } from "./src/components/BodyComponent";
import 'remixicon/fonts/remixicon.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage } from "./src/components/About";
import { HelpPage } from "./src/components/Help";
import { Error } from "./src/components/Error";

// I am making a whole Application component in which my header hero section and footer will come
const ApplicationMainDiv = () => {
    return (
        <>
            <HeaderComponent />
            <BodyComponent />
        </>
    )
}

const approuter = createBrowserRouter([
    {
        path: "/",
        element: <ApplicationMainDiv/>,
        errorElement:<Error/>
        
    },
    
    {
        path: "/about",
        element: <AboutPage/>,
    },
    {
        path: "/help",
        element:<HelpPage/> ,
    }
])
const root = ReactDOM.createRoot(document.querySelector(".container"));
root.render(<RouterProvider router={approuter}/>);