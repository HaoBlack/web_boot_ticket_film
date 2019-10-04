import React, { Component } from "react";
import "./header.css";

class header extends Component {
  render() {
    return (
      <header>
        <div className="row">
          <div className="col-12 mennu">
            <nav className="navbar navbar-expand-sm navbar-light">
              <a className="navbar-brand" href="/">
                <img className="weblogo" src="/img/web-logo.png" alt="" />
              </a>
              <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="coxllapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto  text-center m-auto">
                  <li className="nav-item ">
                    <a className="nav-link" href="#TimeShowFilm">
                      Lịch Chiếu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#clusterOfCinema">
                      Cụm Rạp
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#newPaper">
                      Tin Tức
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#appFree">
                      Ứng Dụng
                    </a>
                  </li>
                </ul>
                <div className="row contact m-2">
                  <div
                    className="col-6 text-center login "
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    <img
                      className="avatar rounded-circle"
                      src="/img/avatar.png"
                      alt="/"
                    />
                    <span>Đăng Nhập</span>
                  </div>
                  <div className="col-6 ">
                    <div
                      className="dropdown seleteLocate"
                      data-toggle="dropdown"
                    >
                      <span className="dropdown-toggle locate ">
                        <i className="fas fa-map-marker-alt m-1"></i>
                        Hồ Chí Minh
                      </span>
                      <div className="dropdown-menu dropdown-menu-right  ">
                        <a className="dropdown-item" href="/">
                          Hồ Chí Minh
                        </a>
                        <a className="dropdown-item" href="/">
                          Hà Nội
                        </a>
                        <a className="dropdown-item" href="/">
                          Đà Nẵng
                        </a>
                        <a className="dropdown-item" href="/">
                          Hải Phòng
                        </a>
                        <a className="dropdown-item" href="/">
                          Biên Hòa
                        </a>
                        <a className="dropdown-item" href="/">
                          Nha Trang
                        </a>
                        <a className="dropdown-item" href="/">
                          Dình Dương
                        </a>
                        <a className="dropdown-item" href="/">
                          Phan Thiết
                        </a>
                        <a className="dropdown-item" href="/">
                          Hạ Long
                        </a>
                        <a className="dropdown-item" href="/">
                          Cần Thơ
                        </a>
                        <a className="dropdown-item" href="/">
                          Vũng Tàu
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default header;
