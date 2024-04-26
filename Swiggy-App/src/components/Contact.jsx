// I am making the contact page for  changing the page 

export const ContactPage=()=>{
    return (
        <div className="flex flex-col gap-6 justify-center items-center my-4">
        <h2>This is the Contact Page</h2>
        <h3>This is namastey Javascript series</h3>
        <form className="flex flex-col">
            <input type="text" placeholder="enter your name" className="border-black rounded-md  "></input>
            <input type="text" placeholder="enter your sir name" className="border-black rounded-md  "></input>
            <button className=" bg-slate-200 rounded-lg ">Submit</button>

        </form>
        </div>
    )
}
