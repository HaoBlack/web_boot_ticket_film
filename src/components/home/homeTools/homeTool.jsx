import React, { Component } from "react";
import "./homeTool.css";

class homeTool extends Component {
  render() {
    return (
      <div className="container homeTool center">
        <div className="row text-left">
          <div className="col-4 text-left road">
            <div className="form-group homeTool-item">
              <select className="form-control checkfilm" id="sel1">
                <option value="/">Phim</option>
                <option value="/">1</option>
                <option value="/">2</option>
                <option value="/">3</option>
                <option value="/">4</option>
              </select>
            </div>
          </div>
          <div className="col-4 ">
            <div className="row">
              <div className="col-6 road">
                <div className="form-group homeTool-item">
                  <select className="form-control checkfilm" id="sel1">
                    <option value="/">Rạp</option>
                    <option value="/">1</option>
                    <option value="/">2</option>
                    <option value="/">3</option>
                    <option value="/">4</option>
                  </select>
                </div>
              </div>
              <div className="col-6 road">
                <div className="form-group homeTool-item">
                  <select className="form-control checkfilm" id="sel1">
                    <option value="/">Ngày xem</option>
                    <option value="/">1</option>
                    <option value="/">2</option>
                    <option value="/">3</option>
                    <option value="/">4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-6 road">
                <div className="form-group homeTool-item">
                  <select className="form-control checkfilm" id="sel1">
                    <option value="/">Xuất chiếu</option>
                    <option value="/">1</option>
                    <option value="/">2</option>
                    <option value="/">3</option>
                    <option value="/">4</option>
                  </select>
                </div>
              </div>
              <div className="col-6 btn-buy">
                <button className="btn btn-button text-center">
                  MUA VÉ NGAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default homeTool;
