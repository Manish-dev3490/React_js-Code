import { useEffect, useState } from "react";
// In this file i am making body component

const BodyComponent=()=>{

    const [TodoValue,setTodoValue]=useState("");
    const [InputText,setInputText]=useState("");

    return (
        <>
        <div className="Body">
        <div className="todo-box">
            <input type="text" onChange={(e)=>{
                setInputText(e.target.value);
            }}></input>
            <button className="add-todo-btn" onClick={()=>{
                
                if(InputText===""){
                    window.alert("Please enter your query to add in todo");
                }

                else if (InputText){
                    setTodoValue(InputText);
                }
            }}>Add Todo</button>
        </div>

        <div className="todo-add-box">
            <p className="list">{TodoValue}</p>
        </div>
        
        </div>
        </>
    )
}

export default BodyComponent;