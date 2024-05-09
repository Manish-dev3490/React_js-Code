import { useSelector } from "react-redux"
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { SUPPORTED_LANGS, netflixlogo } from "../utils/constant";
import 'remixicon/fonts/remixicon.css'
import { addToggleToGPTButton, removeGPTMovieandTitle } from "../utils/GPTSlice";
import { useRef } from "react";
import { addlang } from "../utils/LanguageConfig";


export const Header = () => {

  const GPTCertificate = useSelector((store) => store?.GPTPage?.toggleGptPage);
  const {GPTSearchMovieResults}=useSelector((store)=>store?.GPTPage);
  const user = useSelector((store) => store?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LangName=useRef(null);

  const handleSignedOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid, photoURL } = user;
        dispatch(addUser({ email: email, displayName: displayName, uid: uid, photoURL: photoURL }))
        navigate("/browse")

      } else {
        dispatch(removeUser())
        navigate("/");

      }
    });

    //   this will call when component will unmount
    return () => unsubscribe()

  }, [])

  const handleGPTToggle = () => {
    dispatch(addToggleToGPTButton());
    dispatch(removeGPTMovieandTitle(GPTSearchMovieResults));
  }

  const handleSupportedLang=()=>{
    dispatch(addlang(LangName.current.value))
  }
  return (
    <div className={user ? "px-8 fixed py-3 z-50 flex bg-gradient-to-b bg-black  from-black justify-between  text-white w-screen items-center bg-opacity-90" : "px-12 py-3  bg-gradient-to-b from-black flex justify-between bg-black items-center bg-opacity-90"}>
      <div className="">
        <img className=" w-48 " src={netflixlogo} alt="logo"></img>
      </div>


      {user && <div className="flex items-center gap-6 justify-between">
        <div>
          <ul className="flex items-center gap-10  mx-20  ">
            <li className="cursor-pointer hover:text-red-500">Tv Shows</li>
            <li className="cursor-pointer hover:text-red-500">Trending</li>
            <li className="cursor-pointer hover:text-red-500">Web Series</li>
            <li className="cursor-pointer hover:text-red-500">My Saved Movies</li>

            <button className="px-2 py-2 rounded-lg flex items-center" onClick={handleGPTToggle}>
              {GPTCertificate ? "Browser Home" : (<> GPT Search <span><i className="ml-2 ri-search-eye-line"></i></span></>
              )}
            </button>{GPTCertificate&&
            <select className="bg-black text-white text-lg px-2 py-2" ref={LangName} onClick={handleSupportedLang}>
              {SUPPORTED_LANGS.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>}

          </ul>
        </div>

        <h3 className=" text-md text-red-500 font-bold ">({user.displayName})</h3>
        {!user ? <img alt="user-img" src={user.photoURL} className="rounded-md h-8 w-8" /> : ""}
        <div className=" text-3xl">
          <button onClick={handleSignedOut} className=" text-sm hover:bg-red-400  opacity-95 bg-red-700 py-2 px-3 rounded-md" > Sign Out</button>

        </div>

        <div>

        </div>
      </div>}
    </div>
  )
}