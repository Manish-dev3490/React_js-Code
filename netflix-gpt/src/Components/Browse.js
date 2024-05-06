import { Header } from "../Components/Header"
import { useMoviePlaying } from "../hooks/useMoviePlaying"
import {Maincontainer } from "./Maincontainer";
import { SecondryContainer } from "./SecondryContainer";

export const Browse = () => {

    useMoviePlaying();


    return (
        <>
            <Header></Header>
            <Maincontainer></Maincontainer>
            <SecondryContainer></SecondryContainer>

        </>

    )
}