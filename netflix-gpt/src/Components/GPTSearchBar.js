import { useDispatch, useSelector } from "react-redux";
import LanguageSupport from "../utils/LanguageSupport";
import { useRef } from "react";
import { Api_Options } from "../utils/constant";
import { addGPTMovieTitle, addGPTResultMovies } from "../utils/GPTSlice";

export const GPTSearchBar = () => {
    const dispatch=useDispatch();
    const LangToShow = useSelector((store) => store?.LanguageToChoose?.lang);
    const SearchText = useRef();


    const handleGPTSearch = async () => {
        const data= await fetch(`https://api.themoviedb.org/3/search/movie?query=${SearchText.current.value}&page=1`,Api_Options);
        const json=await data.json();
        dispatch(addGPTResultMovies(json.results));
        dispatch(addGPTMovieTitle(SearchText.current.value))
    }

    return (
        <div>
            <form
                className="w-[53vw] py-3 rounded-lg  justify-center bg-black mt-32 flex"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    className="w-[44vw] bg-white text-black font-bold rounded-lg pl-4"
                    type="text"
                    placeholder={LanguageSupport[LangToShow].placeholder}
                    ref={SearchText}
                />
                <button onClick={handleGPTSearch} className="w-[6vw] bg-red-700 ml-4 text-white rounded-lg py-3">
                    {LanguageSupport[LangToShow].search}
                </button>
            </form>
        </div>
    );
};
