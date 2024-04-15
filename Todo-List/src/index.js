import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/BodyCommponent";


// All components of Application are inside this  component
const ApplicationComponent=()=>{

    return (
        <>
        <HeaderComponent/>
        <BodyComponent/>
        </>
    )
}

const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(<ApplicationComponent/>)