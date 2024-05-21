import React from 'react'
import useGetPopularVidoes from '../Hooks/useGetPopularVidoes';
import VideoCard from './VideoCard';
import { buttonList } from '../Utils/Constant';
import { useSelector } from 'react-redux';

const BodyMainContainer = () => {
  const PopularVideos = useSelector((store) => store?.Videos?.popularVideos);
  console.log(PopularVideos);
  useGetPopularVidoes()
 

  return (
    <div className='pl-60 -z-10 mt-5'>
      {/* This is for button list */}
      <div>
        {buttonList.map((button, index) => <button className='bg-gray-200  ml-3 px-3 py-1 rounded-md' key={index}>{button}</button>)}
      </div>

      {/* This is for list of most popular videos */}
      <div className='flex flex-wrap mt-4 px-3 gap-10'>
        {PopularVideos&&PopularVideos.map((Video)=><VideoCard data={Video}/>)}
      </div>

    </div>
  )
}

export default BodyMainContainer