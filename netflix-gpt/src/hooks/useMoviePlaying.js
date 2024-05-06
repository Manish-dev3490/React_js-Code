import { Api_Options } from "../utils/constant"
import { useEffect } from "react"

 export const useMoviePlaying = () => {

    const getNowMovieData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', Api_Options);
        const json = await response.json();
        console.log(json);
    }

    useEffect(() => {
        getNowMovieData();
    }, [])


}