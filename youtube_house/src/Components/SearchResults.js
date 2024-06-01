import React from 'react'
import useSearchByquery from '../Hooks/useSearchByquery'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

const SearchResults = () => {
    const query=useSelector((store)=>store?.Videos?.inputText);
    const results=useSelector((store)=>store?.Videos?.searchedData);
    const {items}=results
    useSearchByquery(query);
  return (
    <div className=' pl-60 flex flex-col'>
        {
            results&&
            items.map((card)=>{
                return (<Link to={"/watch?v=" +card?.id?.videoId}><div className='flex gap-4 mt-6 cursor-pointer items-center' key={card?.id?.videoId}>
                    <img src={card?.snippet?.thumbnails?.medium?.url} className=' rounded-lg' alt=''/>
                    <div className=' flex flex-col gap-3'>
                        <h3 className=' font-medium'>{card?.snippet?.title}</h3>
                        <h5 className=' font-medium'>{card?.snippet?.channelTitle}</h5>
                        <h2 className=' font-medium'>Created At : {card?.snippet?.publishedAt}</h2>
                        <p className=' font-medium'>{card?.snippet?.description}</p>
                    </div>
                </div></Link>)
            })
        }

    </div>
  )
}

export default SearchResults