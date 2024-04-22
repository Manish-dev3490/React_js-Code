import AccordionList from "../utils/AccordionOBJ";
import { useState } from "react";

const AccordionApp = () => {
    const [ShowItem,setShowItem]=useState(false);
    
    function handleClick(){
        setShowItem(true);
    }
    return (
        AccordionList.map((check) => {
            return (
                <>
                    <div className="acc">
                        <h2>Acoordion {(check.id)}</h2>
                        <h2 onClick={handleClick}>⬇️</h2>
                    </div>
                    {ShowItem&&check.content}</>

            )
        })
    )
}

export default AccordionApp