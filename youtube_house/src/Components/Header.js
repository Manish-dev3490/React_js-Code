import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Hamburger_Icon, Notification_Bell_icon, Search_Icon, User_icon, Youtube_Logo } from '../Utils/Constant'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { addUser, removeUser } from '../Utils/UserSlice';
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";



export const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((store) => store?.user);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email, uid } = user
                dispatch(addUser({ email: email, uid: uid }));
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

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        });
    }

    return (
        <div className='flex items-center justify-between px-8  w-screen'>
            {/* For logo and hamburger menu section */}
            <div className='flex items-center gap-2'>
                {user && <img alt='Hamburger-icon' src={Hamburger_Icon} className=' w-6 h-8' />}
                <img alt='Youtube-icon' src={Youtube_Logo} className=' w-36' />
            </div>

            {/* for input and search section */}
            {user && <div className='flex'>
                <input type='text' placeholder='Search your video' className=' bg-gray-100 pl-4 py-2 rounded-l-full  w-96' />
                <button className=' w-12 px-2 rounded-r-full bg-gray-300'><img alt='srch-icon' src={Search_Icon} className='' /></button>
            </div>}


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
