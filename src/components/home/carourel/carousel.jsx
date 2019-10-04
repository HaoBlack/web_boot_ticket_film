import React from "react";
import "./carousel.css";

const carousel = () => {
  return (
    <div>
      <div id="demo" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ul className="carousel-indicators">
          <li
            data-target="#demo"
            data-slide-to={0}
            className="indicators active"
          />
          <li data-target="#demo" data-slide-to={1} className="indicators" />
          <li data-target="#demo" data-slide-to={2} className="indicators" />
        </ul>
        {/* The slideshow */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <button
              type="button"
              className="playTrailer"
              data-toggle="modal"
              data-target="#Modalplaytrailer"
            >
              <img src="/img/play-video.png" alt="video" />
            </button>
            <img
              src="/img/bg-profile/buommmm-15677399454407.jpg"
              alt="Los Angeles"
              width={1400}
              height={500}
            />
            <div className="backgradient"></div>
          </div>
          <div className="carousel-item">
            <button
              className="playTrailer"
              data-toggle="modal"
              data-target="#myModal"
            >
              <img src="/img/play-video.png" alt="video" />
            </button>
            <img
              src="/img/bg-profile/karik-15683426104830.jpg"
              alt="Chicago"
              width={1400}
              height={500}
            />
            <div className="backgradient"></div>
          </div>
          <div className="carousel-item">
            <button
              className="playTrailer"
              data-toggle="modal"
              data-target="#myModal"
            >
              <img src="/img/play-video.png" alt="video" />
            </button>
            <img
              src="/img/bg-profile/shinkai-15683427483860.jpg"
              alt="New York"
              width={1400}
              height={500}
            />
            <div className="backgradient"></div>
          </div>
        </div>
        {/* Left and right controls */}
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    </div>
  );
};

export default carousel;
