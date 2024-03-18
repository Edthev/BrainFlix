import uploadImage from "../../assets/Images/Upload-video-preview.jpg";
import Upload from "../../assets/Icons/upload.svg";
import "./upload.scss";
import { Link } from "react-router-dom";
let main = () => {
  return (
    <div className="uploadPage">
      <div className="empty">t1</div>
      <div className="empty">t2</div>
      <div className="empty">t3</div>
      <div className="empty">t4</div>
      <div className="empty">t5</div>
      <div className="empty">t6</div>
      <div className="empty">t7</div>
      <h1 className="uploadPage__title">Upload Video</h1>
      <div className="border hiddenMobile"></div>
      <form className="uploadPage__form">
        <div class="right">
          <div className="desktop">
            <h3 className="form__subtitle">VIDEO THUMBNAIL</h3>
            <div className="form__imageDiv">
              <img className="form__image" src={uploadImage} />
            </div>
          </div>
          <div className="desktop">
            <div className="form__inputs">
              <div className="inputTitle">
                <label for="Video Title">TITLE YOUR VIDEO</label>
                <input
                  type="text"
                  id="title"
                  name="videoTitle"
                  placeholder="Add a title to your video"
                />
              </div>
              <div className="inputDescription">
                <label for="Video Title">ADD A VIDEO DESCRIPTION</label>
                <input
                  type="text"
                  id="description"
                  name="videoDescription"
                  placeholder="Add a description to your video"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border hiddenMobile"></div>
        <div className="Buttons">
          <div>
            <img className="uploadForm__img" src={Upload} />
            <button className="form__button">Publish</button>
          </div>
          <div>
            <Link to="/">
              <button className="form__cancelButton">Cancel</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default main;
