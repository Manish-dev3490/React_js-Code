import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Hamburger_Icon, Notification_Bell_icon, Search_Icon, User_icon, YOUTUBE_SEARCH_API, Youtube_Logo } from '../Utils/Constant'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { addUser, removeUser } from '../Utils/UserSlice';
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import { toggleForm } from '../Utils/FormSlice';
import {Link} from "react-router-dom"
import 'remixicon/fonts/remixicon.css'
import { addSuggestion } from '../Utils/suggestion';
import { addInputText } from '../Utils/Videosdata';



export const Header = () => {
    const dispatch = useDispatch()
      const [inputText,SetInputText]=useState("");
    const navigate = useNavigate()
    const user = useSelector((store) => store?.user);
    const suggestion=useSelector((store)=>store?.suggestions?.suggestion)

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email, uid ,displayName,phoneNumber} = user
                dispatch(addUser({ email: email, uid:uid,displayName:displayName,phoneNumber}));
                if (window.location.pathname === "/") {
                    navigate("/homepage");
                }

            }
            else {
                dispatch(removeUser())
                if (window.location.pathname !== "/") {
                    navigate("/")
                }
            }
        });

        return () => unsubscribe()
    }, [])

    useEffect(()=>{
       const timer=setTimeout(()=>{
        getSuggestions();
       },200) 
       return (()=>{
        clearTimeout(timer)
       })
    },[inputText])

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        });
    }

    const handleSidebar=()=>{
        dispatch(toggleForm())
    }

    const getSuggestions=async()=>{
        const data= await fetch(YOUTUBE_SEARCH_API+inputText);
        const json=await data.json();
        dispatch(addSuggestion(json[1]))
    }



    const handleSearch=()=>{
        
            navigate("/SearchPage");
        
    }

    const handleinputfield=(e)=>{
        SetInputText(e.target.value) ;
        dispatch(addInputText(e.target.value));
    }

    return (
        <div className='flex items-center justify-between px-8  w-screen  fixed z-30  bg-gray-200'>
            {/* For logo and hamburger menu section */}
            <div className='flex items-center gap-2'>
                {user && <img alt='Hamburger-icon' src={Hamburger_Icon} onClick={handleSidebar} className=' w-6 h-8 cursor-pointer' />}
                <Link to={"/homepage"}><img alt='Youtube-icon' src={Youtube_Logo} className=' w-36' /></Link>
            </div>

            {/* for input and search section */}
            {user && <div className=' flex flex-col '>
            <div className='flex'>
                <input value={inputText} onChange={handleinputfield} type='text' placeholder='Search your video' className=' text-white bg-black pl-4 py-2 rounded-l-full  w-96' />
                <button className=' w-12 px-2 rounded-r-full bg-white text-black'><img alt='srch-icon' onClick={handleSearch} src={Search_Icon} /></button>
            </div>
            
            {suggestion?<div className=' w-[432px]  px-2 bg-white rounded-md text-black  h-auto absolute z-50  top-20  '>
            <ul className=' text-md  font-medium' onClick={(e)=>SetInputText(e.target.textContent)}>
                {suggestion.map((s)=><li key={s}  className='shadow-sm mt-2 hover:bg-gray-200 cursor-pointer'><i className =" mr-2 ri-search-line"></i> {s}</li>)}
        
            </ul>
            </div>:""}

            </div>
            }


            {/* for  user icons section*/}
            {user && <div className='flex gap-2'>
                <img alt='Bell-Icon' src={Notification_Bell_icon} className=' w-8' />
                <img alt='user-icon' src={User_icon} className=' w-8' />
                <button onClick={handleSignOut} className='bg-red-500 text-black px-3 rounded-md cursor-pointer font-normal'>Sign Out</button>
            </div>
            }

        </div>
    )
}
