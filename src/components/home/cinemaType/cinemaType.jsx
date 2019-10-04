import React, { Component } from "react";
import "./cinemaType.css";
import ListCinema from "./listCinema/listCinema";
import CinemaContent from "./cinemaContent/cinemaContent";
import ListFilmOfCinema from './listFilmOfCiname/listFilmOfCiname'

class cinemaType extends Component {
  render() {
    return (
      <div id="clusterOfCinema" className="container cinema-all">
        <div className="row">
          <div className="col-sm-2 ListCinema">
            <ListCinema />
          </div>
          <div className="col-sm-4 CinemaContent">
              <CinemaContent/>
          </div>
          <div className="col-sm-6 ListFilmOfCinema">
              <ListFilmOfCinema/>
          </div>
        </div>
      </div>
    );
  }
}

export default cinemaType;
