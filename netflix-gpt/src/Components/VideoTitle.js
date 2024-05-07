const VideoTitle = ({ title, overview }) => {
    return (
        <div className="px-10">

            <h2 className="text-3xl">{title}</h2>
            <p className=" w-4/12">{overview}</p>

            <div className="flex gap-4">
                <button className="px-6 py-2 bg-gray-200 rounded-lg">▶️ Play</button>
                <button className="px-6 py-2 bg-gray-200 rounded-lg">! More Info</button>
            </div>


        </div>
    )
}
export default VideoTitle;