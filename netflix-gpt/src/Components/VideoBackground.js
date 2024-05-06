import { useEffect } from "react";
import Api_Options from "../utils/constant"

const Videobackground = ({id}) => {

    const getTrailor= async ()=>{
        const response=await fetch("https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US'", Api_Options);
        const json=response.json();
        console.log(json);

    }
    useEffect(()=>{
        getTrailor()
    },[])
  return (
    <></>
  )
  
};
export default Videobackground;
