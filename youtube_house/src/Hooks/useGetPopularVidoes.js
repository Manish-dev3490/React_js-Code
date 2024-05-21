import  { useEffect } from 'react'
import { YouTube_Api_MostPopular } from '../Utils/Constant'
import {useDispatch} from "react-redux"
import { addPopularMovies } from '../Utils/Videosdata';

const useGetPopularVidoes = () => {
    const dispatch=useDispatch();
  const getPopularVideos= async()=>{
    const data= await fetch(YouTube_Api_MostPopular);
    const json= await data.json();
    dispatch(addPopularMovies(json.items))
  }
  useEffect(()=>{
    getPopularVideos();
  },[])
}

export default useGetPopularVidoes