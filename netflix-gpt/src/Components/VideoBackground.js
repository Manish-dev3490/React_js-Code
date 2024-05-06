import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

const Videobackground = ({ id }) => {
    const ShowTrailor = useSelector((store) => store.movies.movietrailor);
    useMovieTrailor(id);


    return (
        <>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + ShowTrailor?.key} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </>
    )

};
export default Videobackground;
