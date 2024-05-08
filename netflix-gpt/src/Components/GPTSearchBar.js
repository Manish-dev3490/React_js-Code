 export const GPTSearchBar=()=>{
    return (
    <div>
        <form className="w-[52vw] py-2 rounded-lg  justify-center bg-white mt-28  flex">
            <input className="w-[44vw] bg-black text-white font-bold rounded-lg pl-4  " type="text" placeholder="What would you like to search "/>
            <button className="w-[6vw] bg-black ml-4 text-white rounded-lg py-3">Search</button>
        </form>
    </div>
    )
}