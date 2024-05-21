import React from 'react'

const VideoCard = ({data}) => {
    
    return (
        data && <div className=' w-64 shadow-lg  h-auto'>
            <img src={data?.snippet?.thumbnails?.medium?.url} className='rounded-md' alt="Video-card" />
            <p className='truncate'>{data?.snippet?.description}</p>
            <span className='flex gap-4'>{data?.statistics?.viewCount} views<span>{data?.snippet?.channelTitle
            }</span></span>
        </div>
    )
}

export default VideoCard