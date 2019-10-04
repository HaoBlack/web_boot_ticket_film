import React, { Component } from "react";
import "./list_Films.css";
import { connect } from "react-redux";
import { GetListFilms } from "../../../actions/listFillm";

//Component
import Upcomingmovie from "./upcoming_movie/upcoming_movie";
import Nowshowingmovie from "./now_showing_movie/now_showing_movie";

class list_Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };
  }

  componentDidMount() {
    // this.props.GetListFilms()
  }

  render() {
    // console.log(this.props.listFilm);

    return (
      <div id="TimeShowFilm" className="list_Films">
        <div className="container">
          <br />
          {/* Nav tabs */}
          <ul className="nav nav-tabs border-0" role="tablist">
            <li className="nav-item ">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#dangchieu"
              >
                Đang Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#sapchieu">
                Sắp chiếu
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div id="dangchieu" className="container tab-pane active">
              <br />
              <Nowshowingmovie />
            </div>
            <div id="sapchieu" className="container tab-pane fade">
              <br />
              <Upcomingmovie />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listFilm: state.listFilm
  };
};

export default connect(
  mapStateToProps,
  { GetListFilms }
)(list_Films);
