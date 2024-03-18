import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import comments from "./component/comments/comments";
import Header from "./component/header/header";
import MainVideo from "./component/mainVideo/mainVideo";
import Upload from "./component/upload/upload";
import nextVideos from "./component/nextVideos/nextVideos";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/:videoID" element={<MainVideo />}></Route>
          <Route path="/" element={<MainVideo />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route
            path="*"
            element={
              <div>
                <div className="empty">t1</div>
                <div className="empty">t2</div>
                <div className="empty">t3</div>
                <div className="empty">t4</div>
                <div className="empty">t5</div>
                <div className="empty">t6</div>
                <div className="empty">t7</div>
                <h1>Error 404</h1>
                <p>Page not found</p>
                <h1></h1>
              </div>
            }
          ></Route>
        </Routes>
        {/* <VideoMetadata /> */}
        {/* <Comments /> */}
        {/* <NextVideos /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
