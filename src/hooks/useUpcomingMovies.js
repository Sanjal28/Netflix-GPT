import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

// custom hook(hook is nothing but js function)
const useUpcomingMovies = () => {
  // it fetches movies from imdb and stores it in redux store
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
    // console.log(json);
  };
  useEffect(() => {
    if (!upcomingMovies) getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
