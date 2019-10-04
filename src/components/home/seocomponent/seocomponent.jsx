import React, { Component } from "react";
import "./seocomponent.css"

class seocomponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-12">
          <div id="demo" className="carousel slide " data-ride="carousel">
            {/* Indicators */}
            <ul className="carousel-indicators dot-white">
              <li data-target="#demo" data-slide-to={0} className="active " />
              <li data-target="#demo" data-slide-to={1}  />
            </ul>
            {/* The slideshow */}
            <div className="carousel-inner linkseo">
              <div className="carousel-item active">
                <img
                  src="/img/newpaper/cns-15680996692295.jpg"
                  alt="Los Angeles"
                  width={940}
                  height={90.08}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/img/newpaper/cns-cuoi-tuan-15681768882751.jpg"
                  alt="Chicago"
                  width={940}
                  height={90.08}
                />
              </div>
            </div>
            {/* Left and right controls */}
          </div>
          ;
        </div>
      </div>
    );
  }
}

export default seocomponent;
