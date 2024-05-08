import { heroImage } from "../utils/constant"
import { GPTMovieSuggestionPage } from "./GPTMovieSuggestion"
import { GPTSearchBar } from "./GPTSearchBar"
 export const GPTSearchPage=()=>{
    return (
        <div className="absolute z-40 w-[100vw]  mt-24">
         <div>
        <img
          className="w-full bg-gradient-to-b -z-10 from-black absolute"
          src={heroImage}
          alt="background"
        />
      </div>

        <div className=" flex flex-col items-center ">
            <GPTSearchBar/>
            <GPTMovieSuggestionPage/>
        </div>
        </div>
    )
}