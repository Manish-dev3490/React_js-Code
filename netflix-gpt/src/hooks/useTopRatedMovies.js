import { useDispatch, useSelector} from "react-redux"
import { Api_Options } from "../utils/constant"
import { useEffect} from "react"
import {  addTopRatedMovies } from "../utils/movieSlice"



 export const useTopRatedMovies = () => {
    const topRatedMovies=useSelector(store=>store?.movies?.topratedmovies);
    const dispatch=useDispatch();

    const getTopRatedMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', Api_Options);
        const json = await response.json();
        console.log(json.results);
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    },[])


}