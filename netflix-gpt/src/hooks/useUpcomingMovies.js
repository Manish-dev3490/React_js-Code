import { useDispatch, useSelector} from "react-redux"
import { Api_Options } from "../utils/constant"
import { useEffect} from "react"
import { addUpcomingMovies } from "../utils/movieSlice";



 export const useUpcomingMovies = () => {
    const upcomingMovies=useSelector(store=>store?.movies?.upcomingmovies);
    const dispatch=useDispatch();

    const getupcomingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', Api_Options);
        const json = await response.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        !upcomingMovies && getupcomingMovies();
    },[])


}