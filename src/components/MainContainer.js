import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return; //if movies is null return,don't procedd further
  const mainMovie = movies[0];
  //   console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="relative pt-[32%] bg-gradient-to-b from-black sm:pt-[12%] md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainContainer;
