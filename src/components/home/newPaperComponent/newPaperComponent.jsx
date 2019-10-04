import React, { Component } from "react";
import "./newPaperComponent.css";

// component
import Movie24H from "./movie24h/movie24h";
import Review from "./review/review";
import Sale from "./Sale/sale";

class newPaperComponent extends Component {
  render() {
    return (
      <div id="newPaper" className="container newPaperComponent pb-5 ">
        <br />
        {/* Nav tabs */}
        <ul className="nav nav-tabs border-0" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#dienanh">
              Điện Ảnh 24H
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#review">
              Review
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#khuyenmai">
              Khuyến Mãi
            </a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div id="dienanh" className="container tab-pane active">
            <br />
            <Movie24H />
          </div>
          <div id="review" className="container tab-pane fade">
            <br />
            <Review />
          </div>
          <div id="khuyenmai" className="container tab-pane fade">
            <br />
            <Sale />
          </div>
        </div>
        <button className="btn-xt mt-4 ">XEM THÊM</button>
      </div>
    );
  }
}

export default newPaperComponent;
