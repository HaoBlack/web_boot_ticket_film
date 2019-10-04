import React, { Component } from "react";
import "./checkOutTicket.css";

//Component
import TypeTicket from "./typeTicket/typeTicket";
import ChooseChair from "./chooseChair/chooseChair";

class checkOutTicket extends Component {
  render() {
    const chooserTypeTicket = () => {
      document.getElementById("left-CheckOut").style.left = "0";
      document.getElementById("titleFilm").style.display = "block";
      document.getElementById("contentTicketFilm").style.display = "block";
      document.getElementById("headerCheckoutTicket").style.width = "100%";
      document.getElementById("modalRight").style.right = "-28%";
      document.getElementById("chooseChair").style.display = "none"
    };
    return (
      <div>
        <div className="container checkoutTicket">
          <br />
          {/* Nav pills */}
          <div id="headerCheckoutTicket" className="row headerCheckoutTicket">
            <div className="col-10 text-left">
              <ul className="nav nav-pills navHeader" role="tablist">
                <li className="nav-item">
                  <a
                    id="01"
                    className="nav-link px-0 linkcheck active"
                    data-toggle="pill"
                    href="#home"
                    onClick={chooserTypeTicket}
                  >
                    <span>01 </span>
                    <small>CHỌN LOẠI VÉ</small>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="02"
                    className="nav-link px-0 linkcheck"
                    data-toggle="pill"
                    href="#menu1"
                  >
                    <span>02</span>
                    <small>CHỌN GHẾ & THANH TOÁN</small>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="03"
                    className="nav-link px-0 linkcheck"
                    data-toggle="pill"
                    href="#menu2"
                  >
                    <span>03</span>
                    <small>KẾT QUẢ ĐẶT VÉ</small>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <div className="account">
                <img
                  className="rounded-circle img-acc"
                  src="./img/avatar.png"
                  alt=""
                />
                <span>Trần Anh Hào</span>
              </div>
            </div>
          </div>
          <div id="modalRight" className="modalRight">
            <div className="contentFullRight">
              <div className="row total">
                <p className="cash">100.000 đ</p>
              </div>
              <div className="row filmName">
                <span className="btn_c">D12</span>
                Trời sáng rồi, Ta ngủ đi thôi - Good Moring and Good Night
                <div className="contentCinema">
                  <div className="address">
                    <span className="pcinema">BHD Star</span>
                    <span className="cinemaname"> - Vincom 3/2</span>
                  </div>
                  <div className="hour">Hôm nay 29/09/2019 - 22:45 - RẠP 2</div>
                </div>
              </div>
              <div className="row chair">
                <div className="col-7 info p-0">
                  <span class="ng-scope text">Ghế</span>
                  <span class="title ng-binding"></span>
                </div>
                <div className="col-5 totalChair p-0">100.000 đ</div>
              </div>
              <div className="infouser">
                <div className="row m-0">
                  <input className="content col-sm-10 col-xs-10" type="text" />
                  <label htmlFor="/">E-Mail</label>
                </div>
              </div>
              <div className="infouser">
                <div className="row m-0">
                  <input className="content col-sm-10 col-xs-10" type="text" />
                  <label htmlFor="/">Phone</label>
                </div>
              </div>
              <div className="methodpay">
                <div className="titleMethodPay">Hình thức thanh toán</div>
                <form>
                  <div className="radio chooseMethod">
                    <label className="paymentParent">
                      <input type="radio" name="optradio" defaultChecked />
                      <img
                        className="icon"
                        src="./img/08075f42d0c4bfc8f2063a35d5b9fca7.jpg"
                        alt=""
                      />
                      <div class="titlechosen">
                        Thanh toán qua ZaloPay
                        <div class="wrap-methodnote">
                          <div class="methodnote">
                            Ưu đãi 1k/vé, 50k/2 vé cho KH mới &amp; 69k/vé cho
                            tất cả KH ZaloPay
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="radio chooseMethod">
                    <label className="paymentParent">
                      <input type="radio" name="optradio" />
                      <img
                        className="icon"
                        src="./img/e20d486bc2a60a2a1d7186c0ec9e177b.png"
                        alt=""
                      />
                      <div class="titlechosen">Visa, Master, JCB</div>
                    </label>
                  </div>
                  <div className="radio chooseMethod">
                    <label className="paymentParent">
                      <input type="radio" name="optradio" />
                      <img
                        className="icon"
                        src="./img/784b134b515da6e0cb8779e2a33f8221.png"
                        alt=""
                      />
                      <div class="titlechosen">Thẻ ATM nội địa</div>
                    </label>
                  </div>
                  <div className="radio chooseMethod">
                    <label className="paymentParent">
                      <input type="radio" name="optradio" />
                      <img
                        className="icon"
                        src="./img/fa954e5ecb81ef0fdc9bb2595dfbd015.png"
                        alt=""
                      />
                      <div class="titlechosen">
                        Thanh toán tại cửa hàng tiện ích
                      </div>
                    </label>
                  </div>
                </form>
              </div>
              <div className="notive">
                <div className="errorbook"></div>
                <img className="icon" src="./img/exclamation.png" alt="" />
                <div className="title">
                  Vé đã mua không thể đổi hoặc hoàn tiền
                </div>
                <div className="title">
                  Mã vé sẽ được gửi qua tin nhắn<span>ZMS</span>(tin nhắn Zalo)
                  và
                  <span>Email</span> đã nhập.
                </div>
              </div>
            </div>
            <div className="lickBuyTicket">Đặt Vé</div>
          </div>

          {/* Tab panes */}
          <div className="tab-content">
            <div id="home" className=" tab-pane active">
              <br />
              <TypeTicket />
              <ChooseChair />
            </div>
            <div id="menu1" className=" tab-pane fade">
              <br />
            </div>
            <div id="menu2" className=" tab-pane fade">
              <br />
              <h3>Menu 2</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default checkOutTicket;
