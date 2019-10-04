import React, { Component } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footerComponent";
import ProfileFilm from "../components/profileFilm/profileFilm";
import ModalLogin from "../components/modalPopup/modal-login/modalLogin";

class detailFlim extends Component {
  render() {
    return (
      <div>
        <Header />
        <ModalLogin />
        <ProfileFilm />
        <Footer />
      </div>
    );
  }
}

export default detailFlim;
