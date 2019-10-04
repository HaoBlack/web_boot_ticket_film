import React, { Component } from "react";
import "./calendarShow.css";
import { Link } from "react-router-dom";

class calendarShow extends Component {
  render() {
    return (
      <div className="container">
        <div className="calendershow-wapper mainMaxWidth2">
          <div className="row">
            <div className="blockContent-left">
              <ul className="nav cluster" role="tablist">
                <li className="nav-item item-cluster  ">
                  <span
                    className="nav-link link-cluster active  "
                    data-toggle="tab"
                    href="#BHD"
                  >
                    <div className="img-cinema">
                      <img
                        src="./img/listCinema/f32670fd0eb083c9c4c804f0f3a252ed.png"
                        alt=""
                      />
                    </div>
                    <div className="cinema-name">
                      <span>BHD Star Cineplex</span>
                    </div>
                  </span>
                  <hr />
                </li>
                <li className="nav-item item-cluster">
                  <span
                    className="nav-link link-cluster"
                    data-toggle="tab"
                    href="#Galaxy"
                  >
                    <div className="img-cinema">
                      <img
                        src="./img/listCinema/e520781386bd5436e94d6e15e193a005.png"
                        alt=""
                      />
                    </div>
                    <div className="cinema-name">
                      <span>Galaxy Cinema</span>
                    </div>
                  </span>
                  <hr />
                </li>
                <li className="nav-item item-cluster">
                  <span
                    className="nav-link link-cluster"
                    data-toggle="tab"
                    href="#CineStar"
                  >
                    <div className="img-cinema">
                      <img
                        src="./img/listCinema/1721cfa98768f300c03792e25ceb0191.png"
                        alt=""
                      />
                    </div>
                    <div className="cinema-name">
                      <span>CineStar</span>
                    </div>
                  </span>
                  <hr />
                </li>
                <li className="nav-item item-cluster">
                  <span
                    className="nav-link link-cluster"
                    data-toggle="tab"
                    href="#DDC"
                  >
                    <div className="img-cinema">
                      <img
                        src="./img/listCinema/9b240f96a233bb43203ee514a21a6004.png"
                        alt=""
                      />
                    </div>
                    <div className="cinema-name">
                      <span>DDC - Đống Đa</span>
                    </div>
                  </span>
                  <hr />
                </li>
                <li className="nav-item item-cluster">
                  <span
                    className="nav-link link-cluster"
                    data-toggle="tab"
                    href="#Mega"
                  >
                    <div className="img-cinema">
                      <img
                        src="./img/listCinema/7b078639bd8fdb09dd83652d207c7b90.png"
                        alt=""
                      />
                    </div>
                    <div className="cinema-name">
                      <span>Mega GS</span>
                    </div>
                  </span>
                  <hr />
                </li>
                <li className="nav-item item-cluster">
                  <span
                    className="nav-link link-cluster"
                    data-toggle="tab"
                    href="#Lotte"
                  >
                    <div className="img-cinema">
                      <img
                        src="./img/listCinema/404b8c4b80d77732e7426cdb7e24be20.png"
                        alt=""
                      />
                    </div>
                    <div className="cinema-name">
                      <span>Lotte Cinema</span>
                    </div>
                  </span>
                  <hr />
                </li>
              </ul>
            </div>
            {/* Nav tabs */}
            {/* Tab panes */}
            <div className="tab-content content-calendar">
              <div className="dayshowfilm text-center">
                <div className="col-2 selectDate active">
                  <strong>Thứ 2</strong>
                  <br />
                  <span>24</span>
                </div>
                <div className="col-2 selectDate ">
                  <strong>Thứ 3</strong>
                  <br />
                  <span>25</span>
                </div>
                <div className="col-2 selectDate ">
                  <strong>Thứ 4</strong>
                  <br />
                  <span>26</span>
                </div>
                <div className="col-2 selectDate ">
                  <strong>Thứ 5</strong>
                  <br />
                  <span>27</span>
                </div>
                <div className="col-2 selectDate ">
                  <strong>Thứ 6</strong>
                  <br />
                  <span>28</span>
                </div>
                <div className="col-2 selectDate ">
                  <strong>Thứ 7</strong>
                  <br />
                  <span>29</span>
                </div>
                <div className="col-2 selectDate ">
                  <strong>Chủ Nhật</strong>
                  <br />
                  <span>30</span>
                </div>
              </div>
              <div id="BHD" className="container filmOnCinema  tab-pane active">
                <br />
                <div id="accordion" className="blockContent">
                  <div className="card">
                    <div className="card-header ">
                      <span
                        className="card-link text-left"
                        data-toggle="collapse"
                        href="#collapseOne"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <Link className="text-decoration-none" to="/checkout">
                            <span className="time_show">22:00</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseTwo"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <Link className="text-decoration-none" to="/checkout">
                            <span className="time_show">22:00</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseThree"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <Link className="text-decoration-none" to="/checkout">
                            <span className="time_show">22:00</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseFour"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <Link className="text-decoration-none" to="/checkout">
                            <span className="time_show">22:00</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseFive"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <Link className="text-decoration-none" to="/checkout">
                            <span className="time_show">22:00</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseSix"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <Link className="text-decoration-none" to="/checkout">
                            <span className="time_show">22:00</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseSeven"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <Link className="text-decoration-none" to="/checkout">
                            <span className="time_show">22:00</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="Galaxy" className="container filmOnCinema tab-pane fade">
                <br />
                <div id="accordion" className="blockContent">
                  <div className="card">
                    <div className="card-header ">
                      <span
                        className="card-link text-left"
                        data-toggle="collapse"
                        href="#collapseOne"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <Link className="text-decoration-none" to="/checkout">
                            <span className="time_show">22:00</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseTwo"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <Link className="text-decoration-none" to="/checkout">
                            <span className="time_show">22:00</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseThree"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <Link className="text-decoration-none" to="/checkout">
                            <span className="time_show">22:00</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseFour"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <Link className="text-decoration-none" to="/checkout">
                            <span className="time_show">22:00</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseFive"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <Link className="text-decoration-none" to="/checkout">
                            <span className="time_show">22:00</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseSix"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <Link className="text-decoration-none" to="/checkout">
                            <span className="time_show">22:00</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseSeven"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="CineStar"
                className="container filmOnCinema tab-pane fade"
              >
                <br />
                <div id="accordion" className="blockContent">
                  <div className="card">
                    <div className="card-header ">
                      <span
                        className="card-link text-left"
                        data-toggle="collapse"
                        href="#collapseOne"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseTwo"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseThree"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseFour"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseFive"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseSix"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseSeven"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>           
              <div id="DDC" className="container filmOnCinema tab-pane fade">
                <br />
                <div id="accordion" className="blockContent">
                  <div className="card">
                    <div className="card-header ">
                      <span
                        className="card-link text-left"
                        data-toggle="collapse"
                        href="#collapseOne"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseTwo"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseThree"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseFour"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseFive"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseSix"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseSeven"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="Mega" className="container filmOnCinema tab-pane fade">
                <br />
                <div id="accordion" className="blockContent">
                  <div className="card">
                    <div className="card-header ">
                      <span
                        className="card-link text-left"
                        data-toggle="collapse"
                        href="#collapseOne"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseTwo"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseThree"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseFour"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseFive"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseSix"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseSeven"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="Lotte" className="container filmOnCinema tab-pane fade">
                <br />
                <div id="accordion" className="blockContent">
                  <div className="card">
                    <div className="card-header ">
                      <span
                        className="card-link text-left"
                        data-toggle="collapse"
                        href="#collapseOne"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseTwo"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseThree"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseFour"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseFive"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseSix"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseSeven"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseSeven"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseSeven"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="collapsed card-link text-left"
                        data-toggle="collapse"
                        href="#collapseSeven"
                      >
                        <img
                          src="./img/newpaper/dua-con-cua-thoi-tiet-weathering-with-you-15668172377968_60x60.jpg"
                          alt=""
                        />
                        <div className="info-film">
                          <span className="name_film">BHD Star Cineplex</span>
                          <span className="name-address">- 3/2</span>
                          <br />
                          <small>L5-Vincom 3/2, 3C Đường 3/2, Q.10</small>
                          <span className="link-map" href="/">
                            [Bản đồ]
                          </span>
                          <br />
                        </div>
                      </span>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="col-12 info-show  text-left">
                          <img
                            className="type_film"
                            src="./img/2_0.png"
                            alt=""
                          />
                          <span className="time_show">22:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default calendarShow;
