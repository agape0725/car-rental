import React from "react";
import phoneImg from "../images/cellphone3.png";
import googlePlay from "../images/google-play.png";
import appStore from "../images/app-store.png";

export default function DownloadApp() {
  return (
    <div className="download_app_overlay">
      <div id="main__download__app__container">
        <div
          className="phone-img"
          style={{ backgroundImage: `url(${phoneImg})` }}
        />
        <div className="download_app_container">
          <div className="download_app_left_col">
            <h1>Experience the future of convenience and stay ahead with our app. Download now!</h1>
            <p>
              "Introducing our new app - your ultimate travel companion, packed
              with exciting features to make your journeys unforgettable!"
            </p>
            <div className="app_button_container">
              <img src={googlePlay} alt="google-play" />
              <img src={appStore} alt="app-store" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
