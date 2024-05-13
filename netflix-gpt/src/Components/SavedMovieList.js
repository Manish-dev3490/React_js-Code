import { useSelector } from "react-redux"
import { SavedItem } from "./SavedItem";

 export const SavedMovieList=()=>{
const savedMovies=useSelector((store)=>store?.SavedMovieSlice?.savedmovies);

return(
    <div className=" py-16    w-screen border-red-600 h-full">
        <div className="flex flex-col">{savedMovies.map((movie)=><SavedItem tagline={movie?.tagline} title={movie?.title} overview={movie?.overview} backdrop_path={movie?.backdrop_path}/>)}</div>
    </div>
)
}