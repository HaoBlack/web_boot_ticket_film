import React, { Component } from "react";
import "./detailCinemaComplex.css";

//Component
import CalendarShow from "./calendarShow/calendarShow";

class detailCinemaComplex extends Component {
  render() {
    return (
      <div className="container detailCinemaComplex pb-5 ">
        <br />
        {/* Nav tabs */}
        <ul className="nav nav-tabs border-0" role="tablist">
          <li className="nav-item m-0">
            <a className="nav-link active" data-toggle="tab" href="#lichchieu">
              Lịch chiếu
            </a>
          </li>
          <li className="nav-item m-0">
            <a className="nav-link" data-toggle="tab" href="#thongtin">
              Thông tin
            </a>
          </li>
          <li className="nav-item m-0">
            <a className="nav-link" data-toggle="tab" href="#danhgia">
              Đánh giá
            </a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content detailContentBt">
          <div id="lichchieu" className="container tab-pane active">
            <br />
            <CalendarShow />
          </div>
          <div id="thongtin" className="container tab-pane fade">
            <br />
            {/* thông tin */}
            <br />
            <button className="btn-xt mt-4 ">XEM THÊM</button>
          </div>
          <div id="danhgia" className="container tab-pane fade">
            <br />
            {/* đánh giá */}
            <br />
            <button className="btn-xt mt-4 ">XEM THÊM</button>
          </div>
        </div>
      </div>
    );
  }
}

export default detailCinemaComplex;
