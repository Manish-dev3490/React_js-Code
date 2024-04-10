import React from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./src/components/HeaderComponent";
import { BodyComponent } from "./src/components/BodyComponent";
import 'remixicon/fonts/remixicon.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AboutPage } from "./src/components/About";
import { HelpPage } from "./src/components/Help";
import { Error } from "./src/components/Error";
import { ContactPage } from "./src/components/Contact";
import { RestaurentDetailPage } from "./src/components/RestaurentDetail";
// I am making a whole Application component in which my header hero section and footer will come
const ApplicationMainDiv = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet></Outlet>
        </>
    )
}

const approuter = createBrowserRouter([
    {
        path: "/",
        element: <ApplicationMainDiv />,
        children: [
            {
                path: "/",
                element: <BodyComponent></BodyComponent>
            },
            {
                path: "/about",
                element: <AboutPage></AboutPage>
            }
            ,
            {
                path: "/help",
                element: <HelpPage></HelpPage>
            },
            {
                path: "/contact",
                element: <ContactPage></ContactPage>
            },
            {
                path:"/restaurent/:resId",
                element:<RestaurentDetailPage></RestaurentDetailPage>
            }
        ],
        errorElement: <Error />

    }
])
const root = ReactDOM.createRoot(document.querySelector(".container"));
root.render(<RouterProvider router={approuter} />);