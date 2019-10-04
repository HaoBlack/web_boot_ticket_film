import React, { Component } from "react";
import "./applicationFree.css";

class applicationFree extends Component {
  render() {
    return (
      <div id="appFree" className="applicationFree">
        <div className="container application-content">
          <div className="row ">
            <div className="col-xs-6 col-md-6 text-left content-app pr-5">
              <h3>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h3>
              <p>
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <button className="btn-appFree">
                App miễn phí - Tải về ngay
              </button>
              <br />
              <small>123Phim có hai phiên bản <a href="/">iOS</a> & <a href="/">Android</a></small>
            </div>
            <div className="col-xs-6 content-image col-md-6">

              <img src="/img/movie24H/phone_hand.png" alt="" />

              <div id="demo" className="carousel PageApp-Free slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/img/movie24H/slide1.png" alt="slide1" />
                  </div>
                  <div className="carousel-item">
                    <img src="/img/movie24H/slide2.png" alt="slide2" />
                  </div>
                  <div className="carousel-item">
                    <img src="/img/movie24H/slide3.png" alt="slide3" />
                  </div>
                  <div className="carousel-item">
                    <img src="/img/movie24H/slide6.png" alt="slide6" />
                  </div>
                  <div className="carousel-item">
                    <img src="/img/movie24H/slide7.png" alt="slide7" />
                  </div>
                  <div className="carousel-item">
                    <img src="/img/movie24H/slide8.png" alt="slide8" />
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

export default applicationFree;
