import { useEffect, useState } from "react";
import HeaderComponent from "./Header";
// In this file i am making body component


const BodyComponent = () => {
    return (
        
        <>
        <HeaderComponent/>
            <input type="text" placeholder="Enter first Number"></input>
            <input type="text" placeholder="Enter first Number"></input>
            <button>Add these numbers</button>
            <h2>Results  is {""}</h2>
        </>
    )
}
export default BodyComponent;