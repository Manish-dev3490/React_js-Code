import { useSelector } from "react-redux"
import 'remixicon/fonts/remixicon.css'


export const Movieinfo = () => {
    const { moviedetail } = useSelector((store) => store?.movies);
    const { vote_average, vote_count,  popularity, release_date, production_companies, genres } = moviedetail;
    if (!moviedetail) return null;

    const genrelist = moviedetail && genres.map((genre) => genre.name)

    return (
        <div className=" absolute top-[70%]   flex flex-col gap-3 text-white px-12">
            <p className="flex gap-8 items-center">Release Date - {release_date}</p>
            <p className="flex gap-8 items-center">Popularity - {Math.floor(popularity)}</p>
            <p className="flex gap-8 items-center">Vote Count - {vote_count}</p>
            <p className="flex gap-5 items-center">Vote Average <span>{Math.floor(vote_average)} <i className="  text-yellow-500 text-lg   ri-star-fill"></i></span> </p>
            <p className="flex gap-3 items-center">Genres <span className="">{genrelist && genrelist.join(" , ")}</span> </p>
            <p className="flex gap-5 items-center">Production company <span>{production_companies[0]?.name}</span></p>
            <button className="bg-red-700 cursor-pointer hover:bg-red-400 rounded-md py-2 mt-2">Add to WatchList</button>
        </div>
    )

}