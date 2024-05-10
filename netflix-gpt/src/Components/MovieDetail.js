import { useSelector } from "react-redux";
import { useMovieDetail } from "../hooks/useMovieDetail";
import { Header } from "./Header"

const MovieDetailPage = () => {
    const { moviedetail, moviedetailVideo } = useSelector((store) => store?.movies)
    useMovieDetail();


    return (
        <>
        <Header/>
            {moviedetailVideo &&
                <div className="w-screen aspect-video relative">
                    <iframe className="w-screen aspect-video " src={`https://www.youtube.com/embed/${moviedetailVideo[0].key}?mute=1&autoplay=1`} title="YouTube video player" allow="accelerometer" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            }
        </>
    )
}

export default MovieDetailPage;