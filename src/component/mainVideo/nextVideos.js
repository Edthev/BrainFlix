import Pfp from "../../assets/Images/Mohan-muruge.jpg";
import addComment from "../../assets/Icons/add_comment.svg";
const VideosList = ({ videos, handleVideoClick, video }) => {
  return (
    <div className="video__comments">
      <h3>{video.comments.length} Comments</h3>
      <div className="comments__new">
        <img src={Pfp} />
        <div className="form">
          <form>
            <div className="desktop">
              <label>JOIN THE CONVERSATION</label>
              <input placeholder="Add a new comment"></input>
            </div>
            <div>
              <img src={addComment} className="addComment" />
              <button>COMMENT</button>
            </div>
          </form>
        </div>
      </div>
      <div className="border"></div>
      <div className="comments">
        {video.comments.map((comment) => {
          let FullDate = comment.timestamp;
          let timestamp = new Date(comment.timestamp);
          let year = timestamp.getFullYear();
          let month = timestamp.getMonth() + 1;
          let day = timestamp.getDate();
          FullDate = `${month}/${day}/${year}`;
          return (
            <div className="comments">
              <div className="flexRow">
                <img src="" className="noIcon" />
                <div className="comments">
                  <div className="flexRow">
                    <h3 className="black">{comment.name}</h3>
                    <p>{FullDate}</p>
                  </div>
                  <p>{comment.comment}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border">
        {videos.map((video) => {
          let FullDate = video.timestamp;
          let timestamp = new Date(video.timestamp);
          let year = timestamp.getFullYear();
          let month = timestamp.getMonth() + 1;
          let day = timestamp.getDate();
          FullDate = `${month}/${day}/${year}`;
          return (
            <div
              key={video.id}
              className="nextVideos"
              onClick={() => handleVideoClick(video)}
            >
              <div className="flexRow">
                <img className="nextVideos__image" src={video.image} />
                <div>
                  <h3 className="commentTitle nextVideoText black">
                    {video.title}
                  </h3>
                  <p className="nextVideoText black">{video.channel}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default VideosList;
