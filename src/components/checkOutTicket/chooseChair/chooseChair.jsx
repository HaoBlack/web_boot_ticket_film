import React, { Component } from "react";
import "./chooseChair.css";

class chooseChair extends Component {
  onClick() {
    var x = 0;
    switch (x) {
      case 0:
        document.getElementById("seatD12").className =
          "seat seatVip seatchoosing";
        document.getElementById("numberD12").innerHTML = "12";
        x = 1;
        break;
      case 1:
        document.getElementById("seatD12").className =
          "seat seatVip";
        document.getElementById("numberD12").innerHTML = "";
        break;
      default:
        break;
    }
    // document.getElementsByClassName("seatchoosing").onClick =
  }

  render() {
    return (
      <div id="chooseChair" className="chooseChair">
        <div id="seat" className="row">
          <div className="col-sx-12 topContent">
            <div className="titleContent">
              <div className="logoCinema">
                <img
                  src="./img/listCinema/f32670fd0eb083c9c4c804f0f3a252ed.png"
                  alt=""
                />
              </div>
              <div className="contentCinema">
                <span className="name">BHD Star</span> - <span>Vincom 3/2</span>
                <br />
                <small>Hôm nay - 09:35 - RẠP 5</small>
              </div>
              <div className="rightTitle">
                <p className="info1">thời gian giữ ghế</p>
                <p className="info2">
                  <span className="minute">01</span>
                  {":"}
                  <span className="second">22</span>
                </p>
              </div>
            </div>
          </div>
          <div className="seatMap">
            <div className="parent-panzoom">
              <div className="room panzoom">
                <div className="screen">
                  <div className="namescreen">
                    <img
                      className="logo"
                      src="./img/img-checkoutTicket/screen.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="listSeat">
                  <div className="rowSeat"></div>
                  {/* A */}
                  <div className="rowSeat">
                    <span className="rowname">
                      <span className="title">A</span>
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose seatNull">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose seatNull">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                  </div>
                  {/* B */}
                  <div className="rowSeat">
                    <span className="rowname">
                      <span className="title">B</span>
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose seatNull">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                  </div>
                  {/* C */}
                  <div className="rowSeat">
                    <span className="rowname">
                      <span className="title">C</span>
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose seatNull">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                  </div>
                  {/* D */}
                  <div className="rowSeat">
                    <span className="rowname">
                      <span className="title">D</span>
                    </span>
                    <span
                      id="seatD12"
                      onClick={this.onClick}
                      className="seat seatVip"
                    >
                      <span id="numberD12" className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip seatNull">
                      <span className="numberSeat"></span>
                    </span>
                  </div>
                  {/* E */}
                  <div className="rowSeat">
                    <span className="rowname">
                      <span className="title">E</span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip seatNull">
                      <span className="numberSeat"></span>
                    </span>
                  </div>
                  {/* F */}
                  <div className="rowSeat">
                    <span className="rowname">
                      <span className="title">F</span>
                    </span>
                    <span className="seat seatVip seatNull">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip seatNull">
                      <span className="numberSeat"></span>
                    </span>
                  </div>
                  {/* G */}
                  <div className="rowSeat">
                    <span className="rowname">
                      <span className="title">G</span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip seatNull">
                      <span className="numberSeat"></span>
                    </span>
                  </div>
                  {/* H */}
                  <div className="rowSeat">
                    <span className="rowname">
                      <span className="title">H</span>
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose seatNull">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose seatNull">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                    <span className="seat seatNotChoose seatNull">
                      <span className="numberSeat"></span>
                      <img
                        src="./img/img-checkoutTicket/notchoose.png"
                        alt=""
                        className="notChoose"
                      />
                    </span>
                  </div>
                  {/* I */}
                  <div className="rowSeat">
                    <span className="rowname">
                      <span className="title">I</span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip seatNull">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip seatNull">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip seatNull">
                      <span className="numberSeat"></span>
                    </span>
                  </div>
                  {/* J */}
                  <div className="rowSeat">
                    <span className="rowname">
                      <span className="title">J</span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seatVip">
                      <span className="numberSeat"></span>
                    </span>
                    <span className="seat seat exit">
                      <span className="numberSeat"></span>
                      <img
                        className="entrance"
                        src="./img/img-checkoutTicket/exit.png"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="noteSeat">
              <div className="typeSeats">
                <span className="typeSeat">
                  <span className="colorSeat colorNull"></span>
                  <span className="nameSeat">Ghế Trống</span>
                </span>
                <span className="typeSeat">
                  <span className="colorSeat colorCouple"></span>
                  <span className="nameSeat">Ghế Đôi</span>
                </span>
                <span className="typeSeat">
                  <span className="colorSeat colorSofa"></span>
                  <span className="nameSeat">Ghế Sofa</span>
                </span>
                <span className="typeSeat">
                  <span className="colorSeat colorVip"></span>
                  <span className="nameSeat">Ghế Vip</span>
                </span>
                <span className="typeSeat">
                  <span className="colorSeat colorDeluxe"></span>
                  <span className="nameSeat">Ghế Deluxe</span>
                </span>
                <span className="typeSeat">
                  <span className="colorSeat colorFrist"></span>
                  <span className="nameSeat">Ghế First Class</span>
                </span>
                <span className="typeSeat">
                  <span className="colorSeat colorChoosing"></span>
                  <span className="nameSeat">Ghế Đang Chọn</span>
                </span>
                <span className="typeSeat">
                  <span className="colorSeat colorChosen">
                    <img
                      className="notChoose"
                      src="./img/img-checkoutTicket/xController.png"
                      alt=""
                    />
                  </span>
                  <span className="nameSeat">Ghế Đã có người chọn</span>
                </span>
                <span className="typeSeat">
                  <span className="colorSeat colornotChoose">
                    <img
                      className="notChoose"
                      src="./img/img-checkoutTicket/notchoose.png"
                      alt=""
                    />
                  </span>
                  <span className="nameSeat">Ghế Không thể chọn</span>
                </span>
              </div>
              <div className="positionViews">
                <span className="positionview">
                  <span className="lineview lineCenter"></span>
                  <span className="titleview">Ghế trung tâm</span>
                </span>
                <span className="positionview">
                  <span className="lineview lineBeautiful"></span>
                  <span className="titleview">Ghế Đẹp</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default chooseChair;
