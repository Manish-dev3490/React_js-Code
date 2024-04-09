import React from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./src/components/HeaderComponent";
import { BodyComponent } from "./src/components/BodyComponent";

// I am making a whole Application component in which my header hero section and footer will come
const ApplicationMainDiv=()=>{
    return (<>
    <HeaderComponent/>
    <BodyComponent src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_FT23_376_EC_120123_3.jpg" description="double cheese pizza" title="pizza kfc"/>
   
    </>)
}

const root=ReactDOM.createRoot(document.querySelector(".container"));
root.render(<ApplicationMainDiv/>);