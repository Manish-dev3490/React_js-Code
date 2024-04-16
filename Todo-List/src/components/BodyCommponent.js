import { useEffect, useState } from "react";
// In this file i am making body component

const BodyComponent=()=>{

    const [Todo,setTodo]=useState([]);
    const [NewTodo,setNewTodo]=useState([]);

    return (
        <>
        <div className="Body">
        <div className="todo-box">
            <input type="text" onChange={(e)=>{
                setNewTodo(e.target.value);
            }}></input>
            <button className="add-todo-btn" onClick={()=>{
                
                if(NewTodo===""){
                    window.alert("Please enter your query to add in todo");
                }

                return (
                    <>{setTodo([...Todo,NewTodo])}</>
                )
                
            }}>Add Todo</button>
        </div>

        <div className="todo-add-box">
            <ul>
            {
                Todo.map((todo,index)=>{
                    console.log(todo);
                    return (
                        
                            <li key={index} className="list">{todo}</li>
                        
                    )
                })
            }
            </ul>
        </div>
        
        </div>
        </>
    )
}

export default BodyComponent;