import React, { Component } from "react";
import "./listFilmOfCinema.css";

class listFilmOfCiname extends Component {
  render() {
    return (
      <div className="listFilmOfCiname">
        <div id="accordion" className="blockContent">
          <div className="card">
            <div className="card-header ">
              <a
                className="card-link text-left"
                data-toggle="collapse"
                href="#collapseOne"
              >
                <img
                  src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                  alt=""
                />
                <div className="info-film">
                  <span className="btn_c">C18</span>
                  <span className="name_film">
                    Đứa Con Của Thời Tiết - Weathering With You
                  </span>
                  <br />
                  <small>114 phút - 123Phim 8.9 - IMDb 7.8</small>
                  <br />
                </div>
              </a>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="col-12 info-show text-left">
                  <img className="type_film" src="./img/2_0.png" alt="" />
                  <span className="time_show">22:00</span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="card">
            <div className="card-header">
              <a
                className="collapsed card-link text-left"
                data-toggle="collapse"
                href="#collapseTwo"
              >
                <img
                  src="./img/newpaper/ga-he-ma-quai-2-it-chapter-two-c18-15668173846807_60x60.jpg"
                  alt=""
                />
                <div className="info-film">
                  <span className="btn_c">C18</span>
                  <span className="name_film">
                    Gã Hề Ma Quái 2 - It Chapter Two
                  </span>
                  <br />
                  <small>172 phút - 123Phim 8 - IMDb 7.9</small>
                  <br />
                </div>
              </a>
            </div>
            <div id="collapseTwo" className="collapse" data-parent="#accordion">
              <div className="card-body">
                <div className="col-12 info-show text-left">
                  <img className="type_film" src="./img/2_0.png" alt="" />
                  <span className="time_show">22:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a
                className="collapsed card-link text-left"
                data-toggle="collapse"
                href="#collapseThree"
              >
                <img
                  src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                  alt=""
                />
                <div className="info-film">
                  <span className="btn_c">C18</span>
                  <span className="name_film">
                    Gã Hề Ma Quái 2 - It Chapter Two
                  </span>
                  <br />
                  <small>172 phút - 123Phim 8 - IMDb 7.9</small>
                  <br />
                </div>
              </a>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="col-12 info-show  text-left">
                  <img className="type_film" src="./img/2_0.png" alt="" />
                  <span className="time_show">22:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a
                className="collapsed card-link text-left"
                data-toggle="collapse"
                href="#collapseFour"
              >
                <img
                  src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                  alt=""
                />
                <div className="info-film">
                  <span className="btn_c">C18</span>
                  <span className="name_film">
                    Gã Hề Ma Quái 2 - It Chapter Two
                  </span>
                  <br />
                  <small>172 phút - 123Phim 8 - IMDb 7.9</small>
                  <br />
                </div>
              </a>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="col-12 info-show  text-left">
                  <img className="type_film" src="./img/2_0.png" alt="" />
                  <span className="time_show">22:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a
                className="collapsed card-link text-left"
                data-toggle="collapse"
                href="#collapseFive"
              >
                <img
                  src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                  alt=""
                />
                <div className="info-film">
                  <span className="btn_c">C18</span>
                  <span className="name_film">
                    Gã Hề Ma Quái 2 - It Chapter Two
                  </span>
                  <br />
                  <small>172 phút - 123Phim 8 - IMDb 7.9</small>
                  <br />
                </div>
              </a>
            </div>
            <div
              id="collapseFive"
              className="collapse"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="col-12 info-show  text-left">
                  <img className="type_film" src="./img/2_0.png" alt="" />
                  <span className="time_show">22:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a
                className="collapsed card-link text-left"
                data-toggle="collapse"
                href="#collapseSix"
              >
                <img
                  src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                  alt=""
                />
                <div className="info-film">
                  <span className="btn_c">C18</span>
                  <span className="name_film">
                    Gã Hề Ma Quái 2 - It Chapter Two
                  </span>
                  <br />
                  <small>172 phút - 123Phim 8 - IMDb 7.9</small>
                  <br />
                </div>
              </a>
            </div>
            <div id="collapseSix" className="collapse" data-parent="#accordion">
              <div className="card-body">
                <div className="col-12 info-show  text-left">
                  <img className="type_film" src="./img/2_0.png" alt="" />
                  <span className="time_show">22:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a
                className="collapsed card-link text-left"
                data-toggle="collapse"
                href="#collapseSeven"
              >
                <img
                  src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                  alt=""
                />
                <div className="info-film">
                  <span className="btn_c">C18</span>
                  <span className="name_film">
                    Gã Hề Ma Quái 2 - It Chapter Two
                  </span>
                  <br />
                  <small>172 phút - 123Phim 8 - IMDb 7.9</small>
                  <br />
                </div>
              </a>
            </div>
            <div
              id="collapseSeven"
              className="collapse"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="col-12 info-show  text-left">
                  <img className="type_film" src="./img/2_0.png" alt="" />
                  <span className="time_show">22:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default listFilmOfCiname;
