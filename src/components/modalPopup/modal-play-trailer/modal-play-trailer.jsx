import React, { Component } from "react";
import { connect } from "react-redux";

class modalplaytrailer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSource: ""
    };
  }

  render() {
    // const { listFilm } = this.props;
    const { idTrailer } = this.props;
    return (
      // <div></div>
      <iframe
        width="1000"
        height="480"
        src={idTrailer}
        title="myFrame"
      ></iframe>
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
  null
)(modalplaytrailer);
