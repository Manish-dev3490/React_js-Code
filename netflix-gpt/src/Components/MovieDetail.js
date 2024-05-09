import { useSelector } from "react-redux";
import {Header} from "./Header"

const MovieDetailPage=()=>{

    const user=useSelector((store)=>store?.user);
    console.log(user);
    return (
        <>
        <Header/>
       </>
    )
}

export default MovieDetailPage;