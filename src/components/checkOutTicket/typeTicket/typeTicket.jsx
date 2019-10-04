import React, { Component } from "react";
import "./typeTicket.css";

class typeTicket extends Component {
  render() {
    const chooseChair = () => {
      document.getElementById("left-CheckOut").style.transition = "all 0.5s";
      document.getElementById("left-CheckOut").style.left = "-20%";
      document.getElementById("titleFilm").style.display = "none";
      document.getElementById("contentTicketFilm").style.display = "none";
      document.getElementById("chooseChair").style.display = "block";
      document.getElementById("headerCheckoutTicket").style.width = "75%";
      document.getElementById("headerCheckoutTicket").style.transition =
        "all 0.4s";
      document.getElementById("modalRight").style.right = "0";
      document.getElementById("modalRight").style.transition = "all 0.5s";
    };
    return (
      <div className="checkTypeTicket">
        <div className="row">
          <div className="col-3 p-0" id="left-CheckOut">
            <div className="modalLefft"></div>
            <div className="back">
              <img src="./img/img-checkoutTicket/prev_checkout.png" alt="" />
            </div>
            <div id="titleFilm" className="titleFilm">
              <p className="info1">Hôm nay</p>
              <p className="info2">
                <span className="btn_c">C18</span>Hung Thần Đại Dương: Thảm Sát
                - 47 Meters Down: Uncaged
              </p>
              <p className="info3">
                89 phút - 123Phim 5.9 - IMDb 5.1 - 2D/Digital
              </p>
            </div>
          </div>
          <div
            id="contentTicketFilm"
            className="col-9 p-0 text-left contentTicketFilm"
          >
            <div className="ticket">
              <div className="col-sx-12 topContent">
                <div className="logoCinema">
                  <img
                    src="./img/listCinema/f32670fd0eb083c9c4c804f0f3a252ed.png"
                    alt=""
                  />
                </div>
                <div className="contentCinema">
                  <span className="name">BHD Star</span> -{" "}
                  <span>Vincom 3/2</span>
                  <br />
                  <small>Hôm nay - 09:35 - RẠP 5</small>
                </div>
              </div>
              <div className="ticketType">
                <div className="col-sx-12 warper-ticket-type">
                  <div className="row">
                    <div className="col-sm-4">
                      <span className="typeTicket">Vé VIP 2D</span>
                    </div>
                    <div className="col-sm-4">
                      <span className="priceTicket">65.000 đ</span>
                    </div>
                    <div className="col-sm-4 text-right">
                      <button className="btn-del">-</button>
                      <span className="ticket-amount">2</span>
                      <button className="btn-add">+</button>
                    </div>
                  </div>
                </div>
                <div className="col-sx-12 warper-ticket-type">
                  <div className="row">
                    <div className="col-sm-4">
                      <span className="typeTicket">Vé thường 2D</span>
                    </div>
                    <div className="col-sm-4">
                      <span className="priceTicket">65.000 đ</span>
                    </div>
                    <div className="col-sm-4 text-right">
                      <button className="btn-del">-</button>
                      <span className="ticket-amount">0</span>
                      <button className="btn-add">+</button>
                    </div>
                  </div>
                </div>
                <div className="col-sx-12 warper-ticket-type">
                  <div className="row">
                    <div className="col-sm-4">
                      <span className="typeTicket">Ghế đôi 2D</span>
                    </div>
                    <div className="col-sm-4">
                      <span className="priceTicket">130.000 đ</span>
                    </div>
                    <div className="col-sm-4 text-right">
                      <button className="btn-del">-</button>
                      <span className="ticket-amount">0</span>
                      <button className="btn-add">+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detailTicket">
                <div className="chosenTicket">
                  <div className="chosenContent">
                    <small>TỔNG TIỀN</small>
                    <p className="totalMoney">140.000 đ</p>
                  </div>
                  <div className="chosenBtn" onClick={chooseChair}>
                    <span>CHON GHẾ</span>
                  </div>
                </div>
                <div className="contact">
                  <div className="note">
                    Xin lưu ý, bạn không thể hủy hoặc thay đổi suất chiếu cho vé
                    đã mua.
                  </div>
                  <div className="hot">
                    <div className="hotline">
                      <p className="hotLineTitle">HOTLINE</p>
                      <p className="costcall">Phí cuộc gọi 1000VND/phút</p>
                    </div>
                    <div className="phone">1900 545 436</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default typeTicket;
