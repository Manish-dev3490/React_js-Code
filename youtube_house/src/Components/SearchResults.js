import React from 'react'
import useSearchByquery from '../Hooks/useSearchByquery'
import { useSelector } from 'react-redux'

const SearchResults = () => {
    const query=useSelector((store)=>store?.Videos?.inputText);
    const results=useSelector((store)=>store?.Videos?.searchedData)
    console.log(results);
    useSearchByquery(query);
  return (
    <div className=' pl-60 flex flex-col'>
        {
            results.map((card)=>{
                return (<div key={card?.items?.id?.videoId}>
                    <img src='' alt=''/>
                    <div>
                        <h3></h3>
                        <h5></h5>
                        <h2></h2>
                        <p></p>
                    </div>
                </div>)
            })
        }

    </div>
  )
}

export default SearchResults