import { useState, useRef } from "react"
import { CheckValidation } from "../utils/validate"
import { Header } from "./Header"
export const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);


    function handleSignInFuncationality() {
        setIsSignIn(!isSignIn);
    }

    let email = useRef(null);
    let password = useRef(null);
   


    function handleSignButton() {
        const message = CheckValidation(email.current.value, password.current.value);
        if(email.current.value==="" || password.current.value===""){
            alert("Please enter your data in input fields")
        }


        seterrorMessage(message);
    

    }




    return (
        <div >
            <Header />
            <div >
                <img className="w-full bg-gradient-to-b from-black absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className=" h-auto bg-black w-4/12 relative mx-auto z-50 top-40 flex flex-col gap-5 px-6 rounded-lg bg-opacity-80 py-8">
                <h2 className="text-white font-medium text-xl">{isSignIn ? "Sign In" : "Sign Up"}</h2>
                <input ref={email} type="text" className="text-white bg-gray-700 rounded-lg py-3 bg-opacity-80 px-5 " placeholder="Enter your email" />
                <input ref={password} type="password" className="text-white bg-gray-700 rounded-lg py-3 bg-opacity-80 px-5 " placeholder="Enter your password" />
                {!isSignIn ? <input  type="text" className="text-white bg-gray-700 rounded-lg py-3 bg-opacity-80 px-5 " placeholder="Enter your full name" /> : ""}


                {!isSignIn ? <input type="text" className="text-white bg-gray-700 rounded-lg py-3 bg-opacity-80 px-5 " placeholder="Enter your mobile number" /> : ""}
                <p className="text-red-600">{errorMessage}</p>


                <button onClick={handleSignButton} className="bg-red-600 rounded-lg py-3 px-5 text-white text-xl">{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="text-white cursor-pointer" onClick={handleSignInFuncationality}>{!isSignIn ? "Already registered ? sign in" : "New to Netflix ? sign up here"}</p>
            </form>

        </div>
    )
}