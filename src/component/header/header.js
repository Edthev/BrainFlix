import "./header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/Icons/search.svg";
import pfp from "../../assets/Images/Mohan-muruge.jpg";
import upload from "../../assets/Icons/upload.svg";
import test from "../../assets/Icons/upload.svg";

function Header() {
  return (
    <header class="header">
      <div class="header__logoImage">
        <img src={logo} />
      </div>
      <div id="mobile">
        <div class="header__searchBar">
          <form class="searchBar__form">
            <img src={searchIcon} />
            <input class="form__input" placeholder="     Search"></input>
          </form>
        </div>
        <div class="header__userImage">
          <img src={pfp} />
        </div>
      </div>
      <div class="header__upload">
        <form class="uploadForm">
          <img class="uploadForm__img" src={upload} />
          <button class="uploadForm__button" onClick="">
            Upload
          </button>
        </form>
      </div>
      <img src={test} class="test" />
    </header>
  );
}
export default Header;
