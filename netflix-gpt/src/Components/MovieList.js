import { MovieCard } from "./MovieCard";
import {Link} from "react-router-dom";
export const MovieList = ({ title, moviesData }) => {

   
    return (
        <div className="text-white px-8  -mt-52 relative ">
            <h2 className="text-3xl">{title}</h2>

            <div className="flex overflow-x-scroll gap-6 mt-5 whitespace-nowrap overflow-auto scrollbar-hide ">
                <div className="flex">
                    {moviesData?.map(card => (
                        
                        <MovieCard key={card.id}   poster_path={card.poster_path} />
                        
                    ))}
                </div>
            </div>
        </div>
    )
}