import "./header.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import SearchIcon from "../../assets/Icons/search.svg";
import Pfp from "../../assets/Images/Mohan-muruge.jpg";
import Upload from "../../assets/Icons/upload.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logoImage">
        <img src={Logo} />
      </div>
      <div id="mobile">
        <div className="header__searchBar">
          <form className="searchBar__form">
            <img src={SearchIcon} />
            <input className="form__input" placeholder="        Search"></input>
          </form>
        </div>
        <div>
          <div className="header__userImage">
            <img src={Pfp} />
          </div>
        </div>
      </div>
      <div className="header__upload">
        <form className="uploadForm">
          <img className="uploadForm__img" src={Upload} />
          <button className="uploadForm__button">Upload</button>
        </form>
      </div>
    </header>
  );
}
export default Header;
