import React from 'react'

const VideoCard = ({data}) => {
    
    return (
        data && <div className=' w-48 shadow-lg bg-black text-white  rounded-md  h-[200px] px-2 py-2 cursor-pointer'>
            <img src={data?.snippet?.thumbnails?.medium?.url} className='rounded-md' alt="Video-card" />
            <p className='font-medium truncate mt-2'>{data?.snippet?.title}</p>
            <span className='flex gap-4 text-sm truncate mt-2'>{data?.statistics?.viewCount} views<span>{data?.snippet?.channelTitle
            }</span></span>
        </div>
    )
}

export default VideoCard