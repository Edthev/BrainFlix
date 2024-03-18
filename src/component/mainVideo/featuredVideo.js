import CloseFullscreen from "../../assets/Icons/close_fullscreen.svg";
import Fullscreen from "../../assets/Icons/fullscreen.svg";
import Pause from "../../assets/Icons/pause.svg";
import Scrub from "../../assets/Icons/scrub.svg";
import Play from "../../assets/Icons/play.svg";
import VolumeUp from "../../assets/Icons/volume_up.svg";
import Pfp from "../../assets/Images/Mohan-muruge.jpg";
import heart from "../../assets/Icons/likes.svg";
import viewsIcon from "../../assets/Icons/views.svg";

const FeaturedVideo = ({ video }) => {
  if (video) {
    let FullDate = video.timestamp;
    let timestamp = new Date(video.timestamp);
    let year = timestamp.getFullYear();
    let month = timestamp.getMonth() + 1;
    let day = timestamp.getDate();
    // console.log(video);
    FullDate = `${month}/${day}/${year}`;
    return (
      <div className="video__mainVideo">
        <div className="video__mainVideo">
          {/* <img className="videoIcons CloseFullscreen" src={CloseFullscreen} /> */}
          <img className="videoIcons Fullscreen" src={Fullscreen} />
          <img className="videoIcons VolumeUp" src={VolumeUp} />
          <img className="videoIcons Pause" src={Pause} />
          {/* <img className="videoIcons Play" src={Play} /> */}
          <img className="videoIcons Scrub" src={Scrub} />
          {/* <video className="video__mainImage Image">
          <source src={video.video} type="video/mp4"></source>
        </video> */}
          <img className="video__mainImage Image" src={video.image} />
        </div>
        <h2>{video.title}</h2>
        <div className="border"></div>
        <div className="video__metaData">
          <div className="flexRow">
            <h3 className="creator">By: {video.channel}</h3>
            <div className="flexRow">
              <img src={viewsIcon} />
              <p>{video.views}</p>
            </div>
          </div>
          <div className="flexRow">
            <p>{FullDate}</p>
            <div className="flexRow">
              <img src={heart} />
              <p>{video.likes}</p>
            </div>
          </div>
          <div className="border"></div>
          <div className="flexRow black video__description">
            {video.description}
          </div>
        </div>
      </div>
    );
  } else {
    <div className="video__mainVideo">Loading featured video...</div>;
  }
};

export default FeaturedVideo;
