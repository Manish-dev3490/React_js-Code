import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../Utils/FormSlice";
import { Youtube_white } from "../Utils/Constant";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Utils/UserSlice";
import { Header } from "./Header";


const Login = () => {
  const dispatch = useDispatch();
  const formValue = useSelector((store) => store?.form?.isSignForm);
  const userStore=useSelector((store)=>store?.user)
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const number = useRef();
  const navigate = useNavigate();

  const FormTogggleFunctionality = () => {
    dispatch(toggleForm());
  };

  const handleSignedFunctionality = () => {
    // this is for Sign Up Api
    if (!formValue) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
        const user = userCredential.user
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg", phoneNumber: number.current.value
        })
          .then(() => {
            console.log(user);
            const { displayName, email, phoneNumber } = auth.currentUser;
            dispatch(addUser({ displayName: displayName, email: email, phoneNumber: phoneNumber }));
            if(window.location.pathname==="/" && userStore){
              navigate("/homepage");
            }
          })
          .catch((error) => {
          });
      })
        .catch((error) => {

        });
    }

    // This is for sign in Api
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user=userCredential.user
          const { displayName, email, phoneNumber } = user;
          dispatch(addUser({ displayName: displayName, email: email, phoneNumber: phoneNumber }));
          if(window.location.pathname==="/" && userStore){
            navigate("/homepage");
          }
        })
        .catch((error) => {
          console.log("something is wrorng");
        });
    }

  }
  return (
    <div className="w-screen h-[100vh] flex flex-col bg-black   items-center ">
      {/* <img src={Youtube_white} alt="Youtube" className=" w-64 h-20" /> */}
      <Header/>

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
            onClick={handleSignedFunctionality}
            type="submit"
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
