import React from "react";
import ReactDOM from "react-dom/client"
import { HeaderComponent } from "./src/components/HeaderComponent";



// Let me create a full app component 
const FullApplicationArea=()=>{
    return (
        <>
        <HeaderComponent/>
        </>
    )
}
// This is the main root of the aplication where we have to render our all components
const rootOfApplication=ReactDOM.createRoot(document.querySelector(".container"));
rootOfApplication.render(<FullApplicationArea/>);