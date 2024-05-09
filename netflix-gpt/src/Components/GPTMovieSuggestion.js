import { useSelector } from "react-redux";
import {MovieCard }from "../Components/MovieCard";

export const GPTMovieSuggestionPage = () => {
    const { GPTSearchMovieResults, GPTMovieTitle } = useSelector((store) => store?.GPTPage);
    const title = "Result for " + GPTMovieTitle;
    return (

        GPTSearchMovieResults ?<div className="w-screen mt-4 px-5 pr-5 ">
            <div className="">
            <h2 className="text-white text-3xl"> {title}</h2>

                <div className=" mt-4 flex flex-wrap justify-center px-10 items-center py-10 gap-8  rounded-lg pr-5  bg-black">


                    {
                        GPTSearchMovieResults?.map((movie)=><MovieCard key={movie.id} poster_path={movie.poster_path}/>)
                    }
                </div>
            </div>
        </div> : null
    )
}