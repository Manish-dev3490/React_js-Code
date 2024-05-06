const VideoTitle=({title,overview})=>{
    return (
        <div className="px-10">
            <h2 className="text-3xl">{title}</h2>
            <p className=" w-4/12">{overview}</p>
        </div>
    )
}
export default VideoTitle;