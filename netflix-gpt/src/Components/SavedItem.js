import { useDispatch} from "react-redux";
import { IMG_CDN_URL } from "../utils/constant"
import { deleteSavedMovie } from "../utils/SavedMovieSlice";

export const SavedItem = ({ tagline, overview, title, backdrop_path }) => {
const dispatch=useDispatch();
    

    const DeleteMovie=()=>{
        dispatch(deleteSavedMovie())
    }
    return (
        <div className="w-screen border-b border-black flex gap-5 py-2 px-4 items-center ">
            <img src={IMG_CDN_URL + backdrop_path} alt="pic" className="  w-32  h h-52      mt-16 rounded-sm" />

            <div className="flex flex-col gap-2 mt-2">
                <h2 className="text-lg font-medium ">{title}</h2>
                <p className="">{overview}</p>
                <p className="">{tagline}</p>

                <button onClick={DeleteMovie} className=" bg-red-500  w-32 py-1 rounded-lg  ">Delete Movie</button>

            </div>

        </div>
    )
}