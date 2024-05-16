import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../Utils/FormSlice";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Utils/UserSlice";
import { Header } from "./Header";


const Login = () => {
  const dispatch = useDispatch();
  const formValue = useSelector((store) => store?.form?.isSignForm);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const number = useRef(null);
  const navigate = useNavigate();

  const FormTogggleFunctionality = () => {
    dispatch(toggleForm());
  };

  const handleSignedFunctionality = () => {

    if (!formValue) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
         
          // update profile
          updateProfile(user, {
            displayName: name.current.value,
            email:email.current.value
          })
            .then(() => {
              const {email, displayName, uid,photoURL} = auth.currentUser;
              dispatch(addUser({email:email,displayName:displayName,uid:uid,photoURL:photoURL}))
            })
            .catch((error) => {
              console.log("some error in update profile");
            });
        })

        .catch((error) => {
          // ..
          console.log("something is wrong in signed up");
        });

    }

    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        })
        .catch((error) => {
          console.log("did not found this user in our backend");
        });
    }

  }
  return (
    <div className="w-screen h-[100vh] flex flex-col    items-center ">
      {/* <img src={Youtube_white} alt="Youtube" className=" w-64 h-20" /> */}
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
          {/* {!formValue ? (
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
          )} */}
          <button
            onClick={handleSignedFunctionality}
            className="h-9 px-2 rounded-md text-white text-md bg-black"
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

}

export default Login;
