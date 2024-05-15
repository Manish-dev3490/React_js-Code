import React from "react";
import { Header } from "./Header";
import {useDispatch, useSelector} from "react-redux"
import { toggleForm } from "../Utils/FormSlice";
const Login = () => {
  const dispatch=useDispatch();
  const formValue=useSelector((store)=>store?.form?.isSignForm);

  const FormTogggleFunctionality=()=>{
    dispatch(toggleForm());
  }


  return (
    <div className="w-screen h-[100vh] flex flex-col  items-center ">
      
    <Header/>
      {/* Form Container */}
      <div className="w-4/12 h-auto flex flex-col  mt-[7%] py-6 bg-gray-200 rounded-md bg-opacity-50 px-4 ">

        <form className="flex w-[100%] h-[100%] flex-col text-white  gap-4">
        <h2 className="text-2xl font-medium text-red-600 ">{formValue?"Sign In":"Sign Up"}</h2>

          <input type="email" placeholder="Enter Your Email"  className=" h-9 px-2 rounded-md text-black text-md" />
          <input type="password" placeholder="Enter Your Password"  className=" h-9 px-2 rounded-md text-black text-md" />
          {!formValue?<input type="text" placeholder="Enter your Name " className="h-9 px-2 rounded-md text-black text-md"/>:""}
          <button type="submit" className="h-9 px-2 rounded-md text-white text-md bg-black">{formValue?"Sign In":"Sign up"}</button>
          <p className="text-red-600 cursor-pointer" onClick={FormTogggleFunctionality}>{formValue?"New to Youtube ? Sign Up Here":"Already a user Sign in Now "}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
