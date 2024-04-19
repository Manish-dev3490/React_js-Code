import { useState } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

// I am creating Header  Component for my website  component is anything you can see in application is a component functional based component is just normal javascript function which rreturn the peice of jsx code
export const HeaderComponent = () => {
    // I have to put login and logout functionality in my header which can be done through hooks because they have such special powers

    const importantHook = useState("Login");
    const [LoginStatus, SetLoginStatus] = importantHook;
    const  onlineStatus=useOnlineStatus();

    
    return (
        <div className="flex justify-between px-10 py-8 bg-cyan-200">
            <h2 className=" font-semibold text-black  text-3xl">Food Paradise</h2>
            
            <div className="w-60rem">
                <ul className="flex justify-between px-12 items-center w-50rem">
                    <li className="px-4">Online:{onlineStatus===true?"✅" : "🔴"}  </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/About">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/help">Help</Link></li>
                    <button className=" bg-white px-6 py-1 rounded-md " onClick={() => {
                        LoginStatus === "Login" ? SetLoginStatus("Logout") : SetLoginStatus("Login");
                    }}>{LoginStatus}</button>
                </ul>
            </div>
        </div>
    )
}