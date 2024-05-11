import { useSelector } from "react-redux"
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { Link, useNavigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { netflixlogo } from "../utils/constant";
import 'remixicon/fonts/remixicon.css'
import { removeGPTMovies } from "../utils/GPTSlice";


export const Header = () => {
  const user = useSelector((store) => store?.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        if (window.location.pathname === "/") {
          navigate("/browse");
        }

      } else {
        dispatch(removeUser())
        if (window.location.pathname !== "/") {
          navigate("/");
        }

      }
    });

    //   this will call when component will unmount
    return () => unsubscribe()

  }, [])




  return (
    <div className={user ? "px-8 fixed py-3 z-50 flex bg-gradient-to-b bg-black  from-black justify-between  text-white w-screen items-center bg-opacity-90" : "px-12 py-3  bg-gradient-to-b from-black flex justify-between bg-black items-center bg-opacity-90"}>
      <Link to={"/browse"}>
        <div className="" onClick={()=>dispatch(removeGPTMovies())}>
          <img className=" w-48 " src={netflixlogo} alt="logo"></img>
        </div>
      </Link>


      {user && <div className="flex items-center gap-6 justify-between">
        <div>
          <ul className="flex items-center gap-10  mx-20  cursor-pointer ">
            <li className=" hover:text-red-500 hover:border-b-2  border-red-600"> Tv Shows </li>
            <li className=" hover:text-red-500 hover:border-b-2  border-red-600">Trending </li>
            <li className=" hover:text-red-500 hover:border-b-2  border-red-600">web Series</li>
            <li className=" hover:text-red-500 hover:border-b-2  border-red-600">My Saved Movies</li>



            <Link to={"/GPTSearchPage"}><button className="px-2 py-2  flex items-center  hover:border-b-2  border-red-600">Gemini Search</button></Link>


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