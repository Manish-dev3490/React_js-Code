import { useRouteError } from "react-router-dom";
// in this page i am creating custom error page


const Error=()=>{
    const error=useRouteError();

    return (
        <>
        <p>{error}</p>
        </>
    )
}

export default Error;