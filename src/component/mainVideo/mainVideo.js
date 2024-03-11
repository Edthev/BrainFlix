import React, { useState } from "react";
import "./mainVideo.scss";
import VideosList from "./nextVideos";
import FeaturedVideo from "./featuredVideo";
import Pfp from "../../assets/Images/Mohan-muruge.jpg";

let videoData = require("../../assets/Data/video-details.json");
let videoListJSON = require("../../assets/Data/videos.json");

// TODO add search functionality
let Video = () => {
  const [featuredVideo, setFeaturedVideo] = useState(videoData[0]);
  const filteredVideos = videoData.filter(
    (video) => video.id !== featuredVideo.id
  );
  const handleVideoClick = (selectedVideo) => {
    console.log(selectedVideo);
    const videoDetails = videoData.find(
      (video) => video.id === selectedVideo.id
    );
    setFeaturedVideo(videoDetails);
    console.log(filteredVideos);
  };
  return (
    <div className="video">
      {/* spacing for header */}
      <div className="empty">t1</div>
      <div className="empty">t2</div>
      <div className="empty">t3</div>
      <div className="empty">t4</div>
      <div className="empty">t5</div>
      <div className="empty">t6</div>
      <div className="empty">t7</div>
      <div className="video__mainVideo">
        {/* main video image */}
        <FeaturedVideo video={featuredVideo} />
      </div>
      <div className="nextVideos">
        <VideosList
          videos={filteredVideos}
          handleVideoClick={handleVideoClick}
          video={featuredVideo}
        />
      </div>
    </div>
  );
};
export default Video;
