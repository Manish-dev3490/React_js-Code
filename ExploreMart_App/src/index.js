// This is our main application file 
import React from "react";
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/Header";
import 'remixicon/fonts/remixicon.css'



// making our main component of the whole application
const ApplicationWholeData=()=>{
    return (
        <>
    <HeaderComponent/>
        </>
    )
}

// getting root from our index.html
const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(<ApplicationWholeData/>)