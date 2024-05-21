import React from 'react'

const VideoCard = ({data}) => {
    
    return (
        data && <div className=' w-64 shadow-lg  h-auto px-2 py-2'>
            <img src={data?.snippet?.thumbnails?.medium?.url} className='rounded-md' alt="Video-card" />
            <p className='font-medium truncate'>{data?.snippet?.title}</p>
            <span className='flex gap-4 text-sm'>{data?.statistics?.viewCount} views<span>{data?.snippet?.channelTitle
            }</span></span>
        </div>
    )
}

export default VideoCard