import React, { Component } from "react";
import { Link } from "react-router-dom";

class itemFilm extends Component {
  render() {
    return (
      <div className="col-md-3  item-films">
        <div className="film text-left">
          <div className="film-header-item">
            <div className="hoverInfo">
              <span>C16</span>
            </div>
            <div className="avgPoint">
              <p className="titleAvg">8.2</p>
              <p>
                <img src="/img/star1.png" alt="star" />
                <img src="/img/star1.2.png" alt="star" />
              </p>
            </div>
          </div>
          <div className="film-content-item">
            <div className="backgroudColor"></div>
            <div className="image-film">
              <img
                src="/img/films/it_chapter_two-_vietnamese_poster_2.jpg"
                alt=""
              />
            </div>
            <button
              className="playTrailerfilm"
              data-toggle="modal"
              data-target="#Modalplaytrailer"
            >
              <img src="/img/play-video.png" alt="video" />
            </button>
          </div>
          <div className="film-footer-item">
            <div className="profileFilm">
              <strong>Gã Hề Ma Quái 2 - It Chapter Two(C18)</strong>
              <br />
              <span>172 phút - 7.9 IMDb</span>
            </div>
            {/* <Link className="nav-link" to="/detailfilm/"> */}
            <div className="lickbuy">
              <Link to="/detailfilm">
                MUA VÉ</Link>
            </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default itemFilm;
