import Videobackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"
import { useSelector } from "react-redux";
export const Maincontainer = () => {

  const movies = useSelector((store) => store.movies?.nowplayingmovies);
  if (!movies) return;

  function generateRandomNumber(min, max) {
    const randomDecimal = Math.random();

    const randomInRange = Math.floor(randomDecimal * (max - min + 1)) + min;

    return randomInRange;
  }

  const randomNumber = generateRandomNumber(1, 19);

  const mainMovieOnBackground = movies[randomNumber];
  const { id, overview, original_title} = mainMovieOnBackground;

  return (
    <div className="w-screen">
      <Videobackground id={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  )
}