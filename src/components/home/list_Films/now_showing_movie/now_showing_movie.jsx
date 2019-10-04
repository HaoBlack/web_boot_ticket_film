import React, { Component } from "react";
import "./now_showing_movie.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { GetListFilms } from "../../../../actions/listFillm";
import { connect } from "react-redux";
import ItemFilm from "./itemFilm/itemFilm";

class now_showing_movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      newsPerPage: 8
    };
  }

  componentDidMount() {
    this.props.GetListFilms();
  };

  prevPage = () => {
    // event.preventDefault();
    const number = this.state.currentPage - 1;
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.listFilm.length / this.state.newsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    for (let index of pageNumbers) {
      if (index === number) {
        const newindex = parseInt(index);
        this.setState({
          currentPage: newindex
        });
      }
    }
  };
  nextPage = () => {
    const number = this.state.currentPage + 1;
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.listFilm.length / this.state.newsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    for (let index of pageNumbers) {
      if (index === number) {
        const newindex = parseInt(index);
        this.setState({
          currentPage: newindex
        });
      }
    }
  };

  render() {
    // const options = {
    //   items: 1,
    //   nav: true,
    //   navText: [
    //     "<div className='nav-btn prev-slide'></div>",
    //     "<div className='nav-btn next-slide'></div>"
    //   ],
    //   rewind: true,
    //   autoplay: true,
    //   slideBy: 1,
    //   dots: true,
    //   dotsEach: true,
    //   dotData: true
    // };
    const { listFilm } = this.props;

    var itemFilmm;
    if (listFilm) {
      itemFilmm = listFilm.map((item, index) => {
        return <ItemFilm key={index} item={item} index={index} />;
      });
    }

    const currentPage = this.state.currentPage;
    const newsPerPage = this.state.newsPerPage;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentTodos = itemFilmm.slice(indexOfFirstNews, indexOfLastNews);
    const renderTodos = currentTodos.map((todo, index) => {
      return (
        <ItemFilm
          stt={index + 1 + (currentPage - 1) * newsPerPage}
          key={index}
          data={todo}
        />
      );
    });

    return (
      <div className="item">
        <div className="container list-film ">
          <div className="row">
            <div className="col-12">
              <div className="col-6 col-12">
                <button
                  className="prevPage"
                  onClick={() => this.prevPage()}
                ></button>
                <div id="renderTodos" className="row">
                  {renderTodos}
                </div>
                <button
                  className="nextPage"
                  onClick={() => this.nextPage()}
                ></button>
              </div>
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
)(now_showing_movie);
