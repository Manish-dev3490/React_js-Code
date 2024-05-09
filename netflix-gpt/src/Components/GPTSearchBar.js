import { useSelector } from "react-redux";
import LanguageSupport from "../utils/LanguageSupport";
import { useRef } from "react";

export const GPTSearchBar = () => {
    const LangToShow = useSelector((store) => store?.LanguageToChoose?.lang);
    const SearchText = useRef();

    const handleGPTSearch = async () => {

       
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
