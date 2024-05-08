import {useSelector} from "react-redux"
import LanguageSupport from "../utils/LanguageSupport";
export const GPTSearchBar=()=>{
    const LangToShow=useSelector((store)=>store?.LanguageToChoose?.lang);
    return (
    <div>
        <form className="w-[53vw] py-3 rounded-lg  justify-center bg-black mt-32 flex">
            <input className="w-[44vw] bg-white text-black font-bold rounded-lg pl-4" 
            type="text" placeholder={LanguageSupport[LangToShow].placeholder}/>
            <button className="w-[6vw] bg-red-700 ml-4 text-white rounded-lg py-3">{LanguageSupport[LangToShow].search}</button>
        </form>
    </div>
    )
}