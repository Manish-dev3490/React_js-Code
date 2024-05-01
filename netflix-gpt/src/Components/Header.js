import { useSelector } from "react-redux"
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import {useNavigate} from "react-router-dom"
import {  onAuthStateChanged } from "firebase/auth";
import {addUser, removeUser} from "../utils/userSlice"
import {useDispatch} from "react-redux"
import { useEffect} from "react"


export const Header=()=>{
    const user=useSelector((store)=>store.user);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleSignedOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
   

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
              const {email, displayName, uid,photoURL} = user;
              dispatch(addUser({email:email,displayName:displayName,uid:uid,photoURL:photoURL}))
              navigate("/browse")
              
            } else {
             dispatch(removeUser())
             navigate("/")
            }
          });

        //   this will call when component will unmount
          return ()=> unsubscribe

    },[])
    
    return (
        <div className="px-12 py-3  bg-gradient-to-b from-black flex justify-between bg-black items-center bg-opacity-90"> 
        <div className="">
            <img className=" w-48 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"></img>
        </div>


        {user&&<div className="flex items-center gap-4">
            <h3>{user.displayName}</h3>
            <img alt ="user-img" src={user.photoURL} className="rounded-md h-8 w-8"/>
            <div className="text-white text-3xl">
                <button onClick={handleSignedOut} className=" text-sm  opacity-95 bg-red-700 py-2 px-2 rounded-md" > Sign Out</button>
              
                </div>

            <div>
              
            </div>
        </div>}
        </div>
    )
}