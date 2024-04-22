import React from "react";
import ReactDOM from "react-dom/client"
import AccordionApp from "./src/components/Main";

const root=ReactDOM.createRoot(document.querySelector(".root"));

const Appdiv=()=>{
return (
    <div className="main">
    <AccordionApp></AccordionApp>
    </div>
)
}
root.render(<Appdiv/>)