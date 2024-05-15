import React from 'react'
import { Hamburger_Icon, Notification_Bell_icon, Search_Icon, User_icon, Youtube_Logo } from '../Utils/Constant'

export const Header = () => {
    return (
        <div className='flex items-center justify-between px-8 '>
            {/* For logo and hamburger menu section */}
            <div className='flex items-center gap-2'>
                <img alt='Hamburger-icon' src={Hamburger_Icon} className=' w-6 h-8' />
                <img alt='Youtube-icon' src={Youtube_Logo} className=' w-36' />
            </div>

            {/* for input and search section */}
            <div className='flex'>
                <input type='text' placeholder='Search your video' className=' bg-gray-100 pl-4 py-2 rounded-l-full  w-96' />
                <button className=' w-12 px-2 rounded-r-full bg-gray-300'><img alt='srch-icon' src={Search_Icon} className='' /></button>
            </div>

            {/* for  user icons section*/}
            <div className='flex gap-2'>
                <img alt='Bell-Icon' src={Notification_Bell_icon} className=' w-8' />
                <img alt='user-icon' src={User_icon} className=' w-8' />
            </div>
        </div>
    )
}
