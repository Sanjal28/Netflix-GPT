import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[10%] px-6 md:px-24 text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold pt-[35%] md:p-0">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview} </p>
      <div>
        <button className="hidden md:inline-block bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▷ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 m-2  text-xl bg-opacity-50 rounded-lg hover:bg-opacity-90">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
