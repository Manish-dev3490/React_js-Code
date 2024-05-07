import { useEffect } from "react";
import { addMovieTrailor } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { Api_Options } from "../utils/constant";

const useMovieTrailor=(id) => {
    const dispatch=useDispatch();

    const getTrailor= async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US'`, Api_Options);
        const json = await response.json();
        // console.log(json);
        const filterTrailor = json.results.filter((video) => video.type === "Trailer");
        const originalTrailor = filterTrailor.length ? filterTrailor[0] : json.results[0];
        dispatch(addMovieTrailor(originalTrailor));
    
    
    } 
   
    useEffect(() => {
        getTrailor()
    }, [])
}

export  default useMovieTrailor;