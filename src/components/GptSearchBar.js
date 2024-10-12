import React, { useRef } from "react";
// import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(); //whatever we type in input field,it is referenced to this var
  const searchMovieTMDB = async (movie) => {
    const query = encodeURIComponent(movie); // encode query for spaces or special characters
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          query +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();

      if (json.results.length > 0) {
        // console.log(json.results);
        const movieResults = json.results;

        dispatch(
          addGptMovieResult({
            movieNames: [movie],
            movieResults: [movieResults],
          })
        );
      } else {
        // console.log("No results found"); // Handle case when no movies are found
      }
    } catch (error) {
      // console.error("Error fetching movie data:", error);
    }
  };

  const handleSearchClick = () => {
    if (searchText.current && searchText.current.value) {
      searchMovieTMDB(searchText.current.value); // Pass the actual value from input
    } else {
      // console.log("Please enter a movie name"); // Handle empty input
    }
  };
  // openAI gpt fetch function:
  // const handleGptSearchClick = async () => {
  //   // console.log(searchText.current.value);
  //   const gptQuery =
  //     "Act as a movie recommendation system and suggest movies for the query:" +
  //     searchText.current.value +
  //     ".Only give me names of 5 movies,comma separated like the example result given ahead.Example Results: GOAT,Dunki,Interstellar,Gadar,Love Today";
  //   // make an api call for this text
  //   const gptResults = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: gptQuery }],
  //     model: "gpt-3.5-turbo",
  //   });
  //   console.log(gptResults.choices);
  //   const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

  //   const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
  //   // tmdb receives 5 calls and takes time to return
  //   // js doesn't wait-map returns promise array of 5 promises
  //   const tmdbResults=await Promise.all(promiseArray)

  //   dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))
  // };

  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className=" w-full sm:w-1/2 m-4 sm:m-0 bg-gray-900 grid grid-cols-12 rounded-lg bg-opacity-90"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-8"
          placeholder="Message Netflix-GPT"
        />
        <button
          className="col-span-4 m-4 py-2 px-4 bg-red-600 text-white rounded-lg"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
