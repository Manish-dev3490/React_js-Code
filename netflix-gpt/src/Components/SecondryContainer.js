import { MovieList } from "./MovieList"
import {useSelector} from "react-redux"

  export const SecondryContainer = () => {

    const moviesNowPlaying=useSelector((store)=>store?.movies);
    return moviesNowPlaying.nowplayingmovies &&(
        <div className="bg-black flex flex-col gap-64 ">
            <MovieList title={"Now Playing"} moviesData={moviesNowPlaying.nowplayingmovies}/>
            <MovieList title={"Popular Movies"} moviesData={moviesNowPlaying.popularmovies}/>

        </div>
    )

}