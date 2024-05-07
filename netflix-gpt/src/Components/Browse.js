import { Header } from "../Components/Header"
import { useMoviePlaying } from "../hooks/useMoviePlaying"
import { usePopularMovie } from "../hooks/usePopularMovie";
import {Maincontainer } from "./Maincontainer";
import { SecondryContainer } from "./SecondryContainer";

export const Browse = () => {

    useMoviePlaying();
    usePopularMovie();


    return (
        <>
            <Header></Header>
            <Maincontainer></Maincontainer>
            <SecondryContainer></SecondryContainer>

        </>

    )
}