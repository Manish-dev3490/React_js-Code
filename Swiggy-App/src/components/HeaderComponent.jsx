import { useState } from "react"
// I am creating Header  Component for my website  component is anything you can see in application is a component functional based component is just normal javascript function which rreturn the peice of jsx code


// I have to put login and logout functionality in my header which can be done through hooks because they have such special powers

 export const HeaderComponent=()=>{

    const [LoginStatus,SetLoginStatus]=useState("Login");
    let status="Login";
    return (
        <div className="Header">
            <h2>Food Paradise</h2>
            <div className="search-box">
                <input type="text" />
                <button className="search-btn">Search</button>
            </div>
            <div className="navigation-bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Help</li>
                    <button className="log-or-not" onClick={()=>{
                        LoginStatus==="Login"?SetLoginStatus("Logout"):SetLoginStatus("Login");
                    }}>{LoginStatus}</button>
                </ul>
            </div>
        </div>
    )
}