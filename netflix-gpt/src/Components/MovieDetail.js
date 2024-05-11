import { useSelector } from "react-redux";
import { useMovieDetail } from "../hooks/useMovieDetail";
import { Header } from "./Header"
import VideoTitle from "./VideoTitle";
import { Movieinfo } from "./MovieInfo";

const MovieDetailPage = () => {
    const { moviedetail, moviedetailVideo } = useSelector((store) => store?.movies)
    useMovieDetail();


    return (
        <>
            <Header />
            {moviedetailVideo &&
                <div className="w-screen aspect-video relative">
                    <iframe className="w-screen aspect-video " src={`https://www.youtube.com/embed/${moviedetailVideo[0].key}?mute=1&autoplay=1`} title="YouTube video player" allow="accelerometer" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            }

            <div>
            <VideoTitle title={moviedetail.original_title} overview={moviedetail.overview}/>
            <Movieinfo/>

            </div>

        </>
    )
}

export default MovieDetailPage;