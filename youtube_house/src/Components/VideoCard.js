import React from 'react'
import { useDispatch } from 'react-redux'
import { removeForm } from '../Utils/FormSlice';

const VideoCard = ({data}) => {
    const dispatch=useDispatch();
    const removeSidebar=()=>{
        dispatch(removeForm());
    }
    
    return (
        data && <div onClick={removeSidebar} className=' w-48 shadow-lg   rounded-md  h-auto px-2 py-2 cursor-pointer'>
            <img src={data?.snippet?.thumbnails?.medium?.url} className='rounded-md' alt="Video-card" />
            <p className='font-medium truncate mt-2'>{data?.snippet?.title}</p>
            <span className='flex gap-4 text-sm truncate mt-2'>{data?.statistics?.viewCount} views<span>{data?.snippet?.channelTitle
            }</span></span>
        </div>
    )
}

export default VideoCard