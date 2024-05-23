import React from "react";
import { Header } from "./Header";
import Sidebar from "./Sidebar";
import useMovieDetail from "../Hooks/useMovieDetail";
import { useSelector } from "react-redux";

export const WatchPage = () => {
  const getMovieId = useSelector((store) => store?.Videos?.videoId);
  const getMovieDetails = useSelector((store) => store?.Videos?.movieDetails);
  const moviedata = useSelector((store) => store?.Videos);

  console.log(getMovieDetails);
  useMovieDetail();

  return (
    moviedata && (
      <div>
        <Header />
        <div className=" py-24 flex ">
          <Sidebar />
          <div className=" pl-60 flex flex-col text-white  gap-2">
            <iframe
              width="800"
              height="600"
              className="rounded-lg"
              src={`https://www.youtube.com/embed/${
                getMovieId && getMovieId
              }?mute=1&autoplay=1`}
              title="YouTube video player"
              allow="accelerometer"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className=" text-black font-medium text-lg ">
              {getMovieDetails[0]?.snippet?.title}
            </p>
            <div className="flex  gap-5">
              <h2 className="text-black text-xl font-medium">
                {getMovieDetails[0]?.snippet?.channelTitle}
              </h2>

              <button className="bg-black text-white px-3 rounded-md py-1">Subscribe</button>
              <button className="bg-black text-white px-3 rounded-md py-1 "><i className=" mr-1 ri-thumb-up-fill w-7 h-7"></i> {getMovieDetails[0]?.statistics?.likeCount} </button>

              

            </div>

            <div className=" px-3 py-3 bg-black bg-opacity-80  w-[800px]  h-auto rounded-md">
              <p>{getMovieDetails[0]?.statistics?.viewCount}K Views </p>
              <p className="">{getMovieDetails[0]?.snippet?.description}</p>
              </div>
          </div>
        </div>
      </div>
    )
  );
};
