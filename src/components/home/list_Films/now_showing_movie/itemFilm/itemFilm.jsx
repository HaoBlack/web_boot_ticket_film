import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./itemFilm.css";
import { GetListFilms } from "../../../../../actions/listFillm";
import { connect } from "react-redux";
import TraillerFilm from "../../../../modalPopup/modal-play-trailer/modal-play-trailer";

class itemFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idTrailer: ""
    };
  }
  onClick = event => {
    const { item } = this.props.data.props;
    let srcFilm = item.Trailer;

    this.setState({
      idTrailer: srcFilm
    });
  };

  render() {
    const { idTrailer } = this.state;
    // console.log("TCL: itemFilm -> render -> idTrailer", idTrailer)
    const { item } = this.props.data.props;

    return (
      <div className="col-md-3  item-films">
        <div className="film text-left">
          <div className="film-header-item">
            <div className="hoverInfo">
              <span>C16</span>
            </div>
            <div className="avgPoint">
              <p className="titleAvg">8.2</p>
              <p>
                <img src="/img/star1.png" alt="star" />
                <img src="/img/star1.2.png" alt="star" />
              </p>
            </div>
          </div>
          <div className="film-content-item">
            <div className="backgroudColor"></div>
            <div className="image-film">
              <img src={item.HinhAnh} alt="" />
            </div>
            <button
              className="playTrailerfilm"
              data-toggle="modal"
              data-target="#Modalplaytrailer"
              onClick={() => this.onClick(item.MaPhim)}
            >
              <img src="/img/play-video.png" alt="video" />
            </button>
            <div className="modal fade" id="Modalplaytrailer">
              <div className="modal-dialog w-trailer">
                <div className="modal-content">
                  <TraillerFilm idTrailer={idTrailer} />
                </div>
              </div>
            </div>
          </div>
          <div className="film-footer-item">
            <div className="profileFilm">
              <strong>{item.TenPhim}</strong>
              <br />
              <span>172 phút - 7.9 IMDb</span>
            </div>
            <div className="lickbuy">
              <Link idTrailer={idTrailer} to="/detailfilm">MUA VÉ</Link>
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
)(itemFilm);
