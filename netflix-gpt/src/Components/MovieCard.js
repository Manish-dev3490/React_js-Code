import { IMG_CDN_URL } from "../utils/constant"
export const MovieCard=({poster_path})=>{

    return <div className="w-40 pr-4 cursor-pointer ">
        {poster_path? <img alt="pic" src={IMG_CDN_URL+poster_path} className="rounded-lg" />:<img src="https://cdn1.vectorstock.com/i/1000x1000/49/90/loading-icon-on-black-vector-24544990.jpg" alt="posterLoad"/>}
    </div>
}