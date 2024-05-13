import { useSelector } from "react-redux"
import { SavedItem } from "./SavedItem";
import { EMPTY_CartIMG } from "../utils/constant";
import {Link} from "react-router-dom"

 export const SavedMovieList=()=>{
const savedMovies=useSelector((store)=>store?.SavedMovieSlice?.savedmovies);



return(
    <div className=" py-16  w-screen border-red-600 h-full">
       {savedMovies.length&&<div className="flex flex-col">{savedMovies.map((movie)=><SavedItem tagline={movie?.tagline} title={movie?.title} overview={movie?.overview} backdrop_path={movie?.backdrop_path}/>)}</div>}
       {!savedMovies.length?<div className=" mt-20 items-center w-screen h-[100%] flex flex-col gap-16">
         <h2 className="text-3xl">Your Saved Movie List <span className="text-red-500">is Empty</span></h2>
         <img className="w-40  h-40" src={EMPTY_CartIMG} alt="Empty page"/>
         <p>Add Some Movies to see Them In The Saved Movie List</p>
         <Link to={"/browse"}> <button className="bg-black py-2 rounded-md text-red-500 px-5">Return To Browse Page</button></Link>
         </div>:""
       }
      
    </div>
)
}