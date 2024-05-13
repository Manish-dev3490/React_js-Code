import { useDispatch, useSelector } from "react-redux";
import { useTrending } from "../hooks/useTrending";
import { Header } from "./Header";
import { MovieCard } from "./MovieCard";
import { Link } from "react-router-dom";
import { addPageNumber } from "../utils/movieSlice";

const TrendingPage = () => {
    const Trendingdata = useSelector((store) => store?.movies?.trendingmovie);
    const dispatch=useDispatch();
    const page = useSelector((store) => store?.movies?.pagenumber); 

    useTrending(page);
    if(!Trendingdata) return null;


    const LoadMoreMovies=()=>{
    dispatch(addPageNumber())
    }
    return (
        <>
            <Header />
            <div className="flex flex-wrap bg-black gap-6 justify-center relative  py-28">
                {Trendingdata&&Trendingdata.map((card) => <Link key={card?.id} to={`/moviedetail/${card.id}`}> <MovieCard poster_path={card.poster_path} /></Link>)}

            </div>
            <button onClick={LoadMoreMovies} className="bg-red-700 absolute left-[48%] px-4 -bottom-[77%] rounded-md font-medium text-white py-2 cursor-pointer">Load More</button>


        </>
    )
}

export default TrendingPage;