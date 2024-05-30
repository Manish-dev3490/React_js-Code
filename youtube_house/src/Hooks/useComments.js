import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetComments } from '../Utils/Constant';
import {addComments} from "../Utils/Videosdata"

const useComments = () => {
    const dispatch=useDispatch();
  const getMovieId = useSelector((store) => store?.Videos?.videoId);

    useEffect(()=>{
        getCommentsOfVideo();
    },[])

    const getCommentsOfVideo=async()=>{
        const data=await fetch(GetComments+getMovieId);
        const json=await data.json();
        dispatch(addComments(json?.items))
    }
  return <></>
  
}

export default useComments