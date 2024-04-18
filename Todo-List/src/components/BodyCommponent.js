import { useEffect, useState } from "react";
import HeaderComponent from "./Header";
// In this file i am making body component


const BodyComponent = () => {

    
    const [first,setFirst]=useState(0);
    const [second,setSecond]=useState(0);
    const [value,setValue]=useState(0);

    
    function handleOne(event){
        setFirst(Number(event.target.value));
        console.log("first number is "+first);
    }

    function handletwo(event){
        setSecond(Number(event.target.value))
        console.log("second number is "+second);

    }


    function handleAdd(){
        setValue((prev)=>{
            console.log(prev)
            return (first+second)
        } );
    }

    return (
        
        <div className="use-state-hook">
            <input type="text" id="number1" onChange={handleOne} placeholder="Enter first Number"></input>
            <input type="text" id="number2" onChange={handletwo} placeholder="Enter first Number"></input>
            <button className="add-btn" onClick={handleAdd}> Add these numbers</button>
            <h2 className="result">Results  is {value}</h2>
        </div>
    )
}
export default BodyComponent;