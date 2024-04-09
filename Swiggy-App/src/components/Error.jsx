import {useRouteError} from "react-router-dom";

 export const Error=()=>{
    const error=useRouteError();
    console.log(error);

    return (
        <>
        <h2>Oops You got some error</h2>
        <p>{error.error.stack}</p>
        </>
    )
}