import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../Utils/FormSlice";
import { Header } from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { addUser } from "../Utils/UserSlice";


const Login = () => {
  const dispatch = useDispatch();
  const formValue = useSelector((store) => store?.form?.isSignForm);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const number = useRef(null);




  const FormTogggleFunctionality = () => {
    dispatch(toggleForm());
  };

  const handleSignFuncationality = () => {
    // this is for sign up logic
    if (!formValue) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          
          // Now update user with name and photo or anything that you want
          updateProfile(user, {
            displayName: name.current.value,
            email:email.current.value,
            phoneNumber:number.current.value
          }).then(() => {
            const {displayName,email,phoneNumber}=user;
            dispatch(addUser({displayName:displayName,email:email,phoneNumber:phoneNumber}));
            
          }).catch((error) => {
            console.log("something wrong in updating user profile");
          });
        })
        .catch((error) => {
          console.log("something error in signed up" + error);
        });
    }
    // this is for sign in logic
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
        })
        .catch((error) => {
          console.log("something error in sign in functionality " + error);
        });
    }
  };

  return (
    <div className="w-screen h-[100vh] flex flex-col    items-center ">
      <Header />
      {/* Form Container */}
      <div className="w-4/12 h-auto flex flex-col  mt-[7%] py-6 bg-gray-200 rounded-md  px-4 ">
        <form
          onClick={(e) => e.preventDefault()}
          className="flex w-[100%] h-[100%] flex-col text-white  gap-4"
        >
          <h2 className="text-2xl font-medium text-red-600 ">
            {formValue ? "Sign In" : "Sign Up"}
          </h2>

          <input
            type="email"
            placeholder="Enter Your Email"
            ref={email}
            className=" h-9 px-2 rounded-md text-black text-md"
          />
          <input
            type="password"
            ref={password}
            placeholder="Enter Your Password"
            className=" h-9 px-2 rounded-md text-black text-md"
          />
          {!formValue ? (
            <>
              <input
                type="text"
                placeholder="Enter your Name "
                className="h-9 px-2 rounded-md text-black text-md"
                ref={name}
              />
              <input
                type="number"
                ref={number}
                placeholder="Enter Your Number"
                className=" h-9 px-2 rounded-md text-black text-md"
              />
            </>
          ) : (
            ""
          )} 
          <button
            className="h-9 px-2 rounded-md text-white text-md bg-black"
            onClick={handleSignFuncationality}
          >
            {formValue ? "Sign In" : "Sign up"}
          </button>
          <p
            className="text-red-600 cursor-pointer"
            onClick={FormTogggleFunctionality}
          >
            {formValue
              ? "New to Youtube ? Sign Up Here"
              : "Already a user Sign in Now "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
