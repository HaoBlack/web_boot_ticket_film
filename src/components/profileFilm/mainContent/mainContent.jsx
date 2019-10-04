import React, { Component } from "react";
import "./mainContent.css";
import TraillerFilm from "../../../components/modalPopup/modal-play-trailer/modal-play-trailer";

class mainContent extends Component {
  render() {
    return (
      <div id="mainContent" className="container-fluid">
        <div className="mainContent-bg"></div>
        <div className="row detailMainTop dark">
          <img
            src="./img/bg-profile/buommmm-15677399454407.jpg"
            alt=""
            className="posterLandscapeFilm"
          />
          <div className="modal fade" id="ModalplaytrailerDetail">
            <div className="modal-dialog w-trailer">
              <div className="modal-content">
                <TraillerFilm />
              </div>
            </div>
          </div>
          <div className="mainContentInfo mainMaxWidth2">
            <div className="col-sm-3 float-left px-0 col-xs-4">
              <div className="posterMain">
                <button
                  className="playTrailerfilm"
                  data-toggle="modal"
                  data-target="#ModalplaytrailerDetail"
                >
                  <img src="/img/play-video.png" alt="video" />
                </button>
              </div>
            </div>
            <div className="col-sm-5 text-left float-left mainInfo">
              <span className="time-show">06.09.2019</span>
              <br />
              <span className="btn_c">C18</span>
              <span className="name-Film">
                Gã Hề Ma Quái 2 - It Chapter Two
              </span>
              <br />
              <small>172 phút - 7.9 IMDb - 2D/Digital</small>
              <br />
              <button className="btn-buy">Mua vé</button>
            </div>
            <div className="col-sm-2 p-0 circleStart">
              <div className="c100 p80">
                <div className="circleBorder"></div>
                <span>8</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <img src="./img/star1.png" alt="" />
              <img src="./img/star1.png" alt="" />
              <img src="./img/star1.png" alt="" />
              <img src="./img/star1.png" alt="" />
              <div className="row">
                <span className="ng-binding">203 người đánh giá</span>
              </div>
            </div>
          </div>
          <div className="styleGradient">adaddadad</div>
        </div>
      </div>
    );
  }
}

export default mainContent;
