import { Header } from "../Components/Header"
import { useMoviePlaying } from "../hooks/useMoviePlaying"
import { usePopularMovie } from "../hooks/usePopularMovie";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { Maincontainer } from "./Maincontainer";
import { SecondryContainer } from "./SecondryContainer";
import {GPTSearchPage} from "../Components/GPTSearchPage"
import { useSelector } from "react-redux";

export const Browse = () => {

  const GPTCertificate=useSelector((store)=>store?.GPTPage?.toggleGptPage);
    useMoviePlaying();
    usePopularMovie();
    useTopRatedMovies();
    useUpcomingMovies();


   

    return (
        <>
            <Header></Header>
            {GPTCertificate?<GPTSearchPage/>:<><Maincontainer></Maincontainer>
            <SecondryContainer></SecondryContainer></>}
            

        </>

    )
}