import React, { useEffect } from 'react'
import { Youtube_Movie_detail } from '../Utils/Constant'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addVideoId } from '../Utils/Videosdata';

const useMovieDetail = () => {
    const [searchParams]=useSearchParams();
    const dispatch=useDispatch();
    const params= searchParams.get("v");
    dispatch(addVideoId(params));

    const getMovieDetail=async()=>{
        const data= await fetch(Youtube_Movie_detail+params);
        const json= await data.json()
    }

    useEffect(()=>{
        getMovieDetail()
    },[params])
  return (
    <div>useMovieDetail</div>
  )
}

export default useMovieDetail