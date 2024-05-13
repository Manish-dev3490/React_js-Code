import 'remixicon/fonts/remixicon.css'

const VideoTitle = ({ title, overview }) => {

    return (
        <div className="px-12 h-[78vh]  bg-gradient-to-t from-black w-screen absolute top-[32%] text-white">

            <h2 className="py-8 text-5xl text-bold">{title}</h2>
            <p className=" w-12/12 text-sm">{overview}</p>

            <div className="flex gap-4 py-8">
                <button className="px-8 py-2 bg-gray-200 text-lg text-black rounded-lg hover:opacity-60"><i className="ri-play-circle-fill"></i> Play</button>
                <button className="px-8 py-2 bg-black text-lg text-white rounded-lg hover:opacity-60"><i className="ri-information-fill"></i> More Info</button>
            </div>
            


        </div>
    )
}
export default VideoTitle;