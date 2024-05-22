import React from 'react'
import { Header } from './Header'
import Sidebar from './Sidebar'
import useMovieDetail from '../Hooks/useMovieDetail'
import { useSelector } from 'react-redux'

export const WatchPage = () => {
  const getMovieId=useSelector((store)=>store?.Videos?.videoId)
  useMovieDetail();

  return (
    <div>
      <Header />
      <div className=' py-24 flex '>
        <Sidebar />
        <div className=' pl-60 '>
        <iframe width="800" height="600" className='rounded-lg'  src={`https://www.youtube.com/embed/${getMovieId&&getMovieId}?mute=1&autoplay=1`} title="YouTube video player" allow="accelerometer" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}
