import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Channel_Icon, PlayList_Icon, Trenidng_Icon, Watch_Later } from '../Utils/Constant'
import {useSelector} from "react-redux";

const Sidebar = () => {
  const formValue=useSelector((store)=>store?.form?.isSignForm);
  return formValue&&(
    <div className={formValue? "overflow-y-scroll    fixed h-[100vh] w-52  cursor-pointer":"w-10 cursor-pointer fixed h-[100vh] "}>
      {/* first unordered list */}
      <ul className='flex flex-col  px-4 gap-4  justify-center text-black py-4  border-b-[1px] border-black'>
        <li className='flex gap-5  font-medium text-md'><span><i className="ri-home-4-fill"></i></span>Home</li>
        <li className='flex gap-5  font-medium text-md'><span><i className="ri-store-fill"></i></span>Shorts</li>
        <li className='flex gap-5  font-medium text-md'><span><i className="ri-rss-fill"></i></span>Subscription</li>
      </ul>

      {/* second unordered list */}
      <ul className='flex flex-col  px-4 gap-4  justify-center text-black py-4  border-b-[1px] border-black'>
        <h2 className='font-medium text-md'>Your Info </h2>
        <li className='flex gap-5  font-medium text-md'><span><img alt='Icon-channel' className='text-white w-4  h-4' src={Channel_Icon}/></span>Your Channel</li>
        <li className='flex gap-5  font-medium text-md'><span><i className="ri-file-history-fill w-5 h-5"></i></span>History</li>
        <li className='flex gap-5  font-medium text-md'><span><img alt='PlayList-Icon' className='w-5 h-5' src={PlayList_Icon}/></span>PlayList</li>
        <li className='flex gap-5  font-medium text-md'><span><img alt='watch_Icon' className='w-5 h-5' src={Watch_Later}/></span>Watch Later</li>
        <li className='flex gap-5  font-medium text-md'><span><i className="ri-thumb-up-fill w-7 h-7"></i></span>Liked Videos</li>

      </ul>

        {/* Third unordered list */}
        <ul className='flex flex-col  px-4 gap-4  justify-center text-black py-4  border-b-[1px] border-black'>
        <h2 className='font-medium text-md'>Explore</h2>
        <li className='flex gap-5  font-medium text-md'><span><img alt='Icon-channel' className='text-white w-5  h-5' src={Trenidng_Icon}/></span>Trending</li>
        <li className='flex gap-5  font-medium text-md'><span><i className="ri-shopping-bag-fill w-9 h-9"></i></span>Shopping</li>
        <li className='flex gap-5  font-medium text-md'><span><i className='ri-music-2-line w-9 h-9'/></span>Music</li>
        <li className='flex gap-5  font-medium text-md'><span><img alt='watch_Icon' className='w-4 h-4' src={Watch_Later}/></span>Movies</li>
        <li className='flex gap-5  font-medium text-md'><span><i className="ri-live-fill"></i></span>Live</li>
        <li className='flex gap-5  font-medium text-md'><span><i className="ri-thumb-up-fill"></i></span>Gaming</li>
        <li className='flex gap-5  font-medium text-md'><span><i className="ri-thumb-up-fill"></i></span>News</li>


      </ul>

      <ul className='flex flex-col  px-4 gap-4  justify-center text-black py-2 border-b-[1px] border-black'>
        <li className='flex gap-5  font-medium text-md'><span><i className="ri-settings-2-fill"></i></span>Setting</li>
        <li className='flex gap-5  font-medium text-md'><span><i className="ri-folder-history-fill"></i></span>History</li>
        <li className='flex gap-5  font-medium text-md'><span><i className="ri-feedback-fill"></i></span>Feedback</li>
      </ul>
      </div>
  )
}

export default Sidebar