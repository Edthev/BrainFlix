import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./mainVideo.scss";
// fix these
import VideosList from "./nextVideos";
import FeaturedVideo from "./featuredVideo";

// const apiURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
// const videosURL = apiURL + "videos";
// const apiKey1 = "3b9fd4ca-2853-4da1-9fb4-68f515858c44";
// const apiKeyUrl = "?api_key=" + apiKey1;
// let videosDataCall = videosURL + apiKeyUrl;
const videosDataCall = "http://localhost:8069/videos";
const videosURL = "http://localhost:8069/videos";
const mainVideoID = "84e96018-4022-434e-80bf-000ce4cd12b8";

function Main() {
   const [featuredVideo, setFeaturedVideo] = useState();
   const [videos, setVideos] = useState([]);
   const { videoID } = useParams();

   // ! get all videos
   const getVideosData = async () => {
      const response = await axios.get(videosDataCall);
      const videosRawData = response.data;
      setVideos(videosRawData);
      // console.log("videosRawData: ", videosRawData);
   };
   useEffect(() => {
      getVideosData();
   }, []);

   // ! featured Video
   const getFeaturedVideo = async (id) => {
      // console.log("link: ", `${videosURL}/${id}/${apiKeyUrl}`);
      const response = await axios.get(`${videosURL}/${id}`);
      const featuredVideoData = response.data;
      // console.log("response: ", featuredVideoData);
      setFeaturedVideo(featuredVideoData);
   };
   console.log(videoID);
   // * change home page to video 1
   useEffect(() => {
      if (videoID) {
         getFeaturedVideo(videoID);
         console.log(featuredVideo);
      } else {
         getFeaturedVideo(mainVideoID);
      }
   }, [videoID]);

   // ! filtered videos
   const filteredVideos = videos.filter((video) => video.id !== featuredVideo.id);
   // console.log(filteredVideos);

   // const handleVideoClick = (selectedVideo) => {
   //   console.log(selectedVideo);
   //   const videoDetails = videosDataCall.find(
   //     (video) => video.id === selectedVideo.id
   //   );
   //   setFeaturedVideo(videoDetails);
   //   console.log(filteredVideos);
   // };
   // console.log(featuredVideo);
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
            <VideosList videos={filteredVideos} video={featuredVideo} />
         </div>
      </div>
   );
}
// Main();

// let videoData = require("../../assets/Data/video-details.json");
// let videoListJSON = require("../../assets/Data/videos.json");

// // TODO add search functionality
// let Video = () => {
//   const [featuredVideo, setFeaturedVideo] = useState(videoData[0]);
//   const filteredVideos = videoData.filter(
//     (video) => video.id !== featuredVideo.id
//   );

//   return (
//     <div className="video">
//       {/* spacing for header */}
//       <div className="empty">t1</div>
//       <div className="empty">t2</div>
//       <div className="empty">t3</div>
//       <div className="empty">t4</div>
//       <div className="empty">t5</div>
//       <div className="empty">t6</div>
//       <div className="empty">t7</div>
//       <div className="video__mainVideo">
//         {/* main video image */}
//         <FeaturedVideo video={featuredVideo} />
//       </div>
//       <div className="nextVideos">
//         <VideosList
//           videos={filteredVideos}
//           handleVideoClick={handleVideoClick}
//           video={featuredVideo}
//         />
//       </div>
//     </div>
//   );
// };
export default Main;
