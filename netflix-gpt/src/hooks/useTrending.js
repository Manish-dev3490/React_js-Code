import {useEffect} from "react"
import { Api_Options } from "../utils/constant";
import { useDispatch} from "react-redux";
import { addTrendingMovie } from "../utils/movieSlice";
 export const useTrending=(page)=>{
//    const page=useSelector((store)=>store?.movies?.pagenumber);
    const dispatch=useDispatch()

    const getTrendingStuf=async()=>{
        const response= await fetch(`https://api.themoviedb.org/3/trending/all/week?page=${page}`,Api_Options);
        const json=await response.json()
        dispatch(addTrendingMovie(json.results))
    }

    useEffect(()=>{
        getTrendingStuf();
    },[page])
}