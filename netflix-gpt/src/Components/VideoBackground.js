import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

const Videobackground = ({ id }) => {

    const ShowTrailor = useSelector((store) => store.movies.movietrailor);
    useMovieTrailor(id);



    return (
    
        <div className="w-screen h-[100vh] aspect-video relative">
            <iframe className="w-screen aspect-video h-[100vh]" src={"https://www.youtube.com/embed/" + ShowTrailor?.key +"?mute=1&autoplay=1"} title="YouTube video player" ></iframe>
            </div>
    )

};
export default Videobackground;
