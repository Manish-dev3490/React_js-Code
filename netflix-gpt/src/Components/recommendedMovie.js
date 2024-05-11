import { useEffect } from "react";
import { Api_Options } from "../utils/constant"
import {useParams} from "react-router-dom"
import { useDispatch } from "react-redux";
import {  addRecommendedMovies } from "../utils/movieSlice";

const RecommendedMovies=()=>{
    const {id}=useParams();
    const dispatch=useDispatch();

    const getrecommendedMovies= async ()=>{
        const response=await fetch (`https://api.themoviedb.org/3/movie/${id}/recommendations?page=1`,Api_Options);
        const json=await response.json();
        dispatch(addRecommendedMovies(json.results));
    }

    useEffect(()=>{
        getrecommendedMovies()
    },[])
}
export default RecommendedMovies;