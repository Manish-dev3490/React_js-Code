import React from 'react'
import useGetPopularVidoes from '../Hooks/useGetPopularVidoes';
import VideoCard from './VideoCard';
import { buttonList } from '../Utils/Constant';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"

const BodyMainContainer = () => {
  const PopularVideos = useSelector((store) => store?.Videos?.popularVideos);
  const formValue=useSelector((store)=>store?.form?.isSignForm);
  useGetPopularVidoes()
 

  return (
    <div className={formValue?"pl-60 ":" pl-8 " }>
      {/* This is for button list */}
      <div>
        {buttonList.map((button, index) => <button className='bg-gray-200  ml-2 px-4 py-1 rounded-md' key={index}>{button}</button>)}
      </div>

      {/* This is for list of most popular videos */}
      <div className='flex flex-wrap mt-4 px-3 gap-10'>
        {PopularVideos&&PopularVideos.map((Video)=><Link key={Video.id} to={"/watch?v=" + Video.id}><VideoCard data={Video}/></Link>)}
      </div>

    </div>
  )
}

export default BodyMainContainer