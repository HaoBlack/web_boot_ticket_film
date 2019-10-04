import React, { Component } from "react";
import Header from "../components/header/header";
import Carousel from "../components/home/carourel/carousel";
import HomeTool from "../components/home/homeTools/homeTool";
import ListFilms from "../components/home/list_Films/list_Films";
import ModalLogin from "../components/modalPopup/modal-login/modalLogin";
import CinemaType from "../components/home/cinemaType/cinemaType";
import SeoComponent from "../components/home/seocomponent/seocomponent";
import NewPaperComponent from "../components/home/newPaperComponent/newPaperComponent";
import ApplicationFree from "../components/home/applicationFree/applicationFree";
import Footer from "../components/footer/footerComponent";

class home extends Component {
  render() {
    return (
      <div>
        <Header />
        <ModalLogin />
        <Carousel />
        <HomeTool />
        <ListFilms />
        <SeoComponent />
        <CinemaType />
        <SeoComponent />
        <NewPaperComponent />
        <ApplicationFree />
        <Footer />
      </div>
    );
  }
}

export default home;
