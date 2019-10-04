import React, { Component } from "react";
import "./profileFilm.css";
import axios from "axios";

//Component
import MainContent from "./mainContent/mainContent";
import DetailCinemaComplex from "./detailCinemaComplex/detailCinemaComplex";

class profileFilm extends Component {
  componentDidMount() {
    // axios
    //   .get("http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=116")
    //   .then(res => {
    //     console.log(res);
    //   });
  }
  render() {
    console.log(this.props);

    return (
      <div className="contentProfile">
        <MainContent />
        <DetailCinemaComplex />
      </div>
    );
  }
}

export default profileFilm;
