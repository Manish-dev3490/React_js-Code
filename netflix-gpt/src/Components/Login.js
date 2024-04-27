import { Header } from "./Header"

export const Login = () => {
    return (
        <div >
            <Header />
            <div >
                <img className="w-full bg-gradient-to-b from-black absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />
            </div>

            <form className=" bg-black w-4/12 relative mx-auto z-50 top-40 flex flex-col gap-5 px-6 rounded-lg bg-opacity-80 py-6">
                <h2 className="text-white font-medium text-xl">Sign In</h2>
                <input type="text" className="text-white bg-gray-700 rounded-lg py-3 bg-opacity-80 px-5 " placeholder="Enter your email" />
                <input type="text" className="text-white bg-gray-700 rounded-lg py-3 bg-opacity-80 px-5 " placeholder="Enter your password" />
                <button className="bg-red-600 rounded-lg py-3 px-5 text-white text-xl">Sign In</button>
                <p className="text-white cursor-pointer">New to Netflix ? <span> Sign Up Here</span></p>
            </form>

        </div>
    )
}