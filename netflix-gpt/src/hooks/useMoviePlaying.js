import { useDispatch, useSelector} from "react-redux"
import { Api_Options } from "../utils/constant"
import { useEffect} from "react"
import { addNowPlayingMovies } from "../utils/movieSlice";



 export const useMoviePlaying = () => {
    const now_playing=useSelector(store=>store?.movies?.nowplayingmovies);
    const dispatch=useDispatch();

    const getNowMovieData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', Api_Options);
        const json = await response.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        !now_playing && getNowMovieData();
    },[])


}