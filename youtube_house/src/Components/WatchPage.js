import React from 'react'
import { Header } from './Header'
import Sidebar from './Sidebar'
import { useSearchParams } from 'react-router-dom'

export const WatchPage = () => {
  const [searchParams]=useSearchParams();
  const params= searchParams.get("v");
  console.log(params);
  return (
    <div>
    <Header/>
    <div className=' py-24 '>
    <Sidebar/>

    </div>
    </div>
  )
}
