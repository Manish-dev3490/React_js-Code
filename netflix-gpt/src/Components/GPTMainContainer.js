import { useRef } from "react";
import { Api_Options, GEMINI_APIKey, heroImage } from "../utils/constant"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useDispatch, useSelector } from "react-redux";
import { addGPTMoviesName, addGPTResultMovies } from "../utils/GPTSlice";
import { MovieList } from "./MovieList";


export const GPtMainContainer = () => {
  const genAI = new GoogleGenerativeAI(GEMINI_APIKey);
  const dispatch = useDispatch();
  const SearchText = useRef(null);
  const MovieGPtResult=useSelector((store)=>store?.GPTMovieResult);
  const {gptmoviesresult}=MovieGPtResult;

  const searchTMDBMovies = async (movie) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&page=1`, Api_Options);
    const json = await response.json();
    return (json.results);
  }

  async function handleGPTSearchClick() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = "Act like a movie recommendation system and suggest me 5 movies as per query" + SearchText.current.value + "only give me names of 5 movies, comma separated like the given result ahead. Example Result: Avatar, Sholay, Bahubali, Singham, Krish";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const GPTMovies = text.split(",");
    dispatch(addGPTMoviesName(GPTMovies))
    const promiseArray = GPTMovies.map((movie) => searchTMDBMovies(movie));
    const GPTMoviesResults = await Promise.all(promiseArray);
    dispatch(addGPTResultMovies(GPTMoviesResults));
    
  }



  return (
    <div>
      <img
        className="w-full bg-gradient-to-b from-black absolute"
        src={heroImage}
        alt="background"
      />


      <form className=" w-[80%] relative top-60 flex z-50 mx-auto px-7 justify-center " onClick={(e) => e.preventDefault()}>
        <input className=" px-4 w-[50%] h-12 rounded-md bg-black text-lg text-white" placeholder="What would you like to search today ?" type="text" ref={SearchText} />
        <button className="ml-4 text-lg px-4  bg-white text-black rounded-lg" onClick={handleGPTSearchClick}>Search</button>
      </form>

    <div className="mt-[35%] flex flex-col bg-black gap-60">
      {gptmoviesresult? gptmoviesresult.map((movieList,index)=><MovieList key={index} title={SearchText.current.value} moviesData={movieList}/>):""}
      </div>
    </div>
  )
}