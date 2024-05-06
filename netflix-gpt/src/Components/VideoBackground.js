import { useDispatch, useSelector } from "react-redux";

const Videobackground = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.nowplayingmovies);
  if (!movies) return;

  function generateRandomNumber(min, max) {
    const randomDecimal = Math.random();

    const randomInRange = Math.floor(randomDecimal * (max - min + 1)) + min;

    return randomInRange;
}

const randomNumber = generateRandomNumber(1, 19);

  const mainMovieOnBackground = movies[randomNumber];
  console.log(mainMovieOnBackground);

  return (
    
  <div>Videobackground</div>

)
};
export default Videobackground;
