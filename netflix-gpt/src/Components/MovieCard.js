import { IMG_CDN_URL } from "../utils/constant"
export const MovieCard=({poster_path})=>{

    if(!poster_path)return null

    return <div className="w-48 pr-4 cursor-pointer ">
         <img alt="pic" src={IMG_CDN_URL+poster_path} className="rounded-lg h-64 w-48" />
    </div>
}