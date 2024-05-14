import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant"
import { deleteSavedMovie } from "../utils/SavedMovieSlice";

export const SavedItem = ({ tagline, overview, title, backdrop_path }) => {
    const dispatch = useDispatch();


    const DeleteMovie = () => {
        dispatch(deleteSavedMovie())
    }
    return (
        <div className="w-screen border-b border-black flex gap-5 items-center pb-4 px-4 ">
            <img src={IMG_CDN_URL + backdrop_path} alt="pic" className="  w-40   h-60       mt-16 rounded-lg" />

            <div className="flex flex-col gap-4  ">
                <h2 className="text-lg font-medium ">{title}</h2>
                <p className="text-sm">{overview}</p>
                <p className="">{tagline}</p>

                <button onClick={DeleteMovie} className=" bg-red-500  w-32 py-1 rounded-lg  ">Delete Movie</button>

            </div>

        </div>
    )
}