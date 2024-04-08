import React from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./src/components/HeaderComponent";

// I am making a whole Application component in which my header hero section and footer will come
const ApplicationMainDiv=()=>{
    return (<>
    <HeaderComponent/>
    </>)
}

const root=ReactDOM.createRoot(document.querySelector(".container"));
root.render(<ApplicationMainDiv/>);