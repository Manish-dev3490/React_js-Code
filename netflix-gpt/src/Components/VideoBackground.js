import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

const Videobackground = ({ id }) => {

    const ShowTrailor = useSelector((store) => store.movies.movietrailor);
    useMovieTrailor(id);



    return (
    
        <div className="w-screen aspect-video relative">
            <iframe className="w-screen aspect-video " src={"https://www.youtube.com/embed/" + ShowTrailor?.key +"?mute=1&autoplay=1"} title="YouTube video player" allow="accelerometer" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
    )

};
export default Videobackground;
