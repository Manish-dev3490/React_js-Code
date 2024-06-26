import { Header } from "../Components/Header"
import { useMoviePlaying } from "../hooks/useMoviePlaying"
import { usePopularMovie } from "../hooks/usePopularMovie";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { Maincontainer } from "./Maincontainer";
import { SecondryContainer } from "./SecondryContainer";


export const Browse = () => {


    useMoviePlaying();
    usePopularMovie();
    useTopRatedMovies();
    useUpcomingMovies();


   

    return (
        <>
            
            <Header></Header>
            <div><Maincontainer></Maincontainer>
            <SecondryContainer></SecondryContainer></div>
            
            

        </>

    )
}