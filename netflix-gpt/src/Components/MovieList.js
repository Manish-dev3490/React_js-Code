import { Link } from "react-router-dom";
import { MovieCard } from "./MovieCard";
import { MovieDetails } from "../utils/FetchDetailOfMovie";

export const MovieList = ({ title, moviesData }) => {
    if (!moviesData) return null;
   



    return (
        <div className="text-white px-10  -mt-52 relative ">
            <h2 className="text-3xl">{title}</h2>

            <div className="flex overflow-x-scroll gap-6 mt-5 whitespace-nowrap overflow-auto scrollbar-hide ">
                <div className="flex ">
                    {moviesData?.map(card => (
                        <Link onClick={MovieDetails} to={`/moviedetail/${card.id}`} key={card.id}>
                            <MovieCard poster_path={card?.poster_path} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}