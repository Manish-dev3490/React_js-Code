import { useSelector } from "react-redux";
import { useMovieDetail } from "../hooks/useMovieDetail";
import { Header } from "./Header"
import VideoTitle from "./VideoTitle";
import { Movieinfo } from "./MovieInfo";
import RecommendedMovies from "./RecommendedMovie";
import {MovieList} from "./MovieList";


const MovieDetailPage = () => {
    const { moviedetail, moviedetailVideo } = useSelector((store) => store?.movies)
    const RecommendedData=useSelector((store)=>store?.movies?.recommendedmovies);
    useMovieDetail();
    RecommendedMovies();
    
    if(!moviedetail) return null;



    return moviedetail&&(
        <>
            <Header />
            {moviedetailVideo &&
                <div className="w-screen aspect-video relative">
                    <iframe className="w-screen aspect-video " src={`https://www.youtube.com/embed/${moviedetailVideo[0]?.key}?mute=1&autoplay=1`} title="YouTube video player" allow="accelerometer" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            }
            {moviedetail&&
                 <div>
                 <VideoTitle title={moviedetail?.original_title} overview={moviedetail?.overview}/>
                 <Movieinfo/>
                 {RecommendedData?
                 <div className="h-[50vh] bg-black mt-52">
                 {<MovieList title={"Recommended movies"} moviesData={RecommendedData}/>}
                 </div>:<h2>You Dont have any recommended movies related to this</h2>}
     
                 </div>
     
            }
           
        </>
    )
}

export default MovieDetailPage;