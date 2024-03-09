import "./mainVideo.scss";
import videoDetails from "../../assets/Data/video-details.json";

// TODO add search functionality
let header = () => {
  let Video;
  let Title;
  let PostDate;
  let Creator;
  let Views;
  let Likes;

  return (
    <div>
      <div class="video">{Video}</div>
      <div class="metadata">
        <div class="metadata__title">{Title}</div>
        <div class="border"></div>
        <div class="metadata__videoStats">
          <div class="videoStats--creator">{Creator}</div>
          <div class="videoStats--postDate">{PostDate}</div>
          <div class="videoStats--views">{Views}</div>
          <div class="videoStats--likes">{Likes}</div>
          <div class="border"></div>
        </div>
        <div class="metadata__videoDescription"></div>
      </div>
    </div>
  );
};
export default header;
