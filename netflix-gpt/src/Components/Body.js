// In this Body Component our whoole application code will combined 

import { Browse } from "./Browse"
import { Login } from "./Login"
import {createBrowserRouter ,RouterProvider} from "react-router-dom"


 export const Body=()=>{


    const AppRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse />
        }
    ])

   

    return (
        <div>
        <RouterProvider router={AppRouter}/>
        </div>
    )
}