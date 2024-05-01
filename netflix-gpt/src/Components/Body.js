// In this Body Component our whoole application code will combined 

import { useEffect} from "react"
import { Browse } from "./Browse"
import { Login } from "./Login"
import {createBrowserRouter ,RouterProvider} from "react-router-dom"
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/Firebase"
import {addUser, removeUser} from "../utils/userSlice"
import {useDispatch} from "react-redux"

 export const Body=()=>{
    const dispatch=useDispatch();

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

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const {email, displayName, uid} = user;
              dispatch(addUser({email:email,displayName:displayName,uid:uid}))
              console.log(addUser);
              // ...
            } else {
             dispatch(removeUser)
            }
          });

    },[])

    return (
        <div>
        <RouterProvider router={AppRouter}/>
        </div>
    )
}