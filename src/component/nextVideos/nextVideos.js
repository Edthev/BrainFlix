// import axios from "axios";
// import { useState } from "react";
let videoData = require("../../assets/Data/video-details.json");
let videoMetadata = require("../../assets/Data/videos.json");

let nextVideos = () => {
  let Video = 0;
  let Title = videoData[Video].title;
  let Creator = videoData[Video].channel;
  let Image = videoData[Video].image;
  console.log(Title);
  console.log(Creator);
  console.log(Image);
  const handleClick = (params) => {
    let [title, handleTitle] = handleClick;
  };
  return (
    <div>
      {/* <div
        className="selectedVideo"
        onClick={() => {
          handleClick();
        }}
      >
        {Video[0]}
      </div>
      <div className="video2" onClick={() => handleClick()}>
        {videoData[1].title}
      </div>
      <div className="video2" onClick={() => handleClick()}>
        {videoData[2].title}
      </div> */}
    </div>
  );
};
export default nextVideos;
