import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

// custom hook(hook is nothing but js function)
const usePopularMovies = () => {
  // it fetches movies from imdb and stores it in redux store
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    // console.log(json);
  };
  useEffect(() => {
    if (!popularMovies) getPopularMovies();
  }, []);
};
export default usePopularMovies;
