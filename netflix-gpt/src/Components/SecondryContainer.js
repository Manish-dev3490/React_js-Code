import { MovieList } from "./MovieList"
import {useSelector} from "react-redux"

  export const SecondryContainer = () => {

    const moviesNowPlaying=useSelector((store)=>store?.movies);
    return moviesNowPlaying.nowplayingmovies &&(
        <div className="bg-black px-10 flex flex-col gap-64 w-screen">
            <MovieList title={"Now Playing"} moviesData={moviesNowPlaying.nowplayingmovies}/>
            <MovieList title={"Popular Movies"} moviesData={moviesNowPlaying.popularmovies}/>
            <MovieList title={"Top rated Movies"} moviesData={moviesNowPlaying.topratedmovies}/>
            <MovieList title={"Upcoming Movies"} moviesData={moviesNowPlaying.upcomingmovies}/>

        </div>
    )

}