import { useEffect } from "react";
import { Api_Options } from "../utils/constant"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addMovieDetail, addMovieDetailVideo, removeMovieDetail, removeMovieDetailVideo } from "../utils/movieSlice";

export const useMovieDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();


    const getMovieDetail = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?`, Api_Options);
        const json = await response.json();
        dispatch(addMovieDetail(json));
    }

    const getMovieVideo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?`, Api_Options);
        const json = await response.json();
        const TrailorForMovieDetail = json?.results?.filter((movie) => movie.type === "Trailer");
        console.log(TrailorForMovieDetail);
            dispatch(addMovieDetailVideo(TrailorForMovieDetail));

        
    }

    useEffect(() => {
        getMovieDetail();
        getMovieVideo();
    }, [])
}