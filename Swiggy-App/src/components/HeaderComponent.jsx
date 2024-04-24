import { useState ,useContext} from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserLoggedData from "../utils/UserContext";

// I am creating Header  Component for my website  component is anything you can see in application is a component functional based component is just normal javascript function which rreturn the peice of jsx code
export const HeaderComponent = () => {
    // I have to put login and logout functionality in my header which can be done through hooks because they have such special powers

    const importantHook = useState("Login");
    const [LoginStatus, SetLoginStatus] = importantHook;
    const  onlineStatus=useOnlineStatus();
    const {loggedinUser}=useContext(UserLoggedData);

    
    return (
        <div className="flex justify-between px-10 py-8 bg-cyan-100 items-center">
            <h2 className=" font-bold text-black  text-2xl">Apna <span className="text-2xl font-bold text-cyan-600">Dhaaba💗</span></h2>
            
            <div className="w-60rem">
                <ul className="flex justify-between px-12 items-center w-50rem">
                    <li className="px-4">Online:{onlineStatus===true?"✅" : "🔴"}  </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/About">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/Cart">Cart</Link></li>
                    <button className=" bg-white px-6 py-1 rounded-md " onClick={() => {
                        LoginStatus === "Login" ? SetLoginStatus("Logout") : SetLoginStatus("Login");
                    }}>{LoginStatus}</button>
                    <li className="px-4">{loggedinUser}</li>


                </ul>
            </div>
        </div>
    )
}