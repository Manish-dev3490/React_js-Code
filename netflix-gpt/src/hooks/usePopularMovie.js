import { useDispatch, useSelector} from "react-redux"
import { Api_Options } from "../utils/constant"
import { useEffect} from "react"
import { addPopularMovies } from "../utils/movieSlice"



 export const usePopularMovie = () => {
    const popularMovies=useSelector(store=>store?.movies?.popularmovies);
    const dispatch=useDispatch();

    const getPopularMovieData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', Api_Options);
        const json = await response.json();
        dispatch(addPopularMovies(json.results))
    }

    useEffect(() => {
        !popularMovies && getPopularMovieData();
    },[])


}