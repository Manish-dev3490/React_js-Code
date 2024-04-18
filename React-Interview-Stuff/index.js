// in this project i am learning some important React hooks
import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";


const Application=()=>{
    return(
        <Body/>
    )
}

const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(<Application></Application>)