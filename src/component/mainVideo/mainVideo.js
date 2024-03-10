import "./mainVideo.scss";
import CloseFullscreen from "../../assets/Icons/close_fullscreen.svg";
import Fullscreen from "../../assets/Icons/fullscreen.svg";
import Pause from "../../assets/Icons/pause.svg";
import Scrub from "../../assets/Icons/scrub.svg";
import Play from "../../assets/Icons/play.svg";
import VolumeOff from "../../assets/Icons/volume_off.svg";
import VolumeUp from "../../assets/Icons/volume_up.svg";
let videoData = require("../../assets/Data/video-details.json");
let videoMetadata = require("../../assets/Data/videos.json");

// TODO add search functionality
let video = () => {
  let Video = 0;
  let Title = videoData[Video].title;
  let Creator = videoData[Video].channel;
  let Image = videoData[Video].image;
  console.log(Image);
  return (
    <div className="video">
      <div className="empty">t1</div>
      <div className="empty">t2</div>
      <div className="empty">t3</div>
      <div className="empty">t4</div>
      <div className="empty">t5</div>
      <div className="empty">t6</div>
      <div className="empty">t7</div>
      <div className="videoOverlay">
        <img className="videoIcons CloseFullscreen" src={CloseFullscreen} />
        <img className="videoIcons Fullscreen" src={Fullscreen} />
        <img className="videoIcons Pause" src={Pause} />
        <img className="videoIcons Play" src={Play} />
        <img className="videoIcons Scrub" src={Scrub} />
        <img className="video__mainImage Image" src={Image} />
        <img className="video__mainImage VolumeOff" src={VolumeOff} />
        <img className="video__mainImage VolumeUp" src={VolumeUp} />
      </div>
    </div>
  );
};
export default video;
