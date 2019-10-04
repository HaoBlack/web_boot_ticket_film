import React, { Component } from "react";
import "./sale.css";

class sale extends Component {
  render() {
    return (
      <div className="container-fuild sale">
        <div className="row ">
          <div className="col-xs-6 col-md-6 text-left article">
            <img
              className="article"
              width="100%"
              height={250.25}
              src="./img/movie24H/vuot-ai-kiem-quyet-that-son-tam-linh-chinh-thuc-tan-cong-phong-ve-viet-15688605530572.jpg"
              alt=""
            />
            <article>
              <p>
                Vượt ải kiểm quyệt, Thất Sơn Tâm Linh chính thức tấn công phòng
                vé Việt
              </p>
              <small>
                Tiền thân của Thất Sơn Tâm Linh không ai khác là... Thiên Linh
                Cái.
              </small>
            </article>
            <div className="col-xs-12 pb-2 col-md-12 comment-footer">
              <img
                width={16}
                className="mr-1"
                src="./img/movie24H/like.png"
                alt=""
              />{" "}
              <small>0</small>
              <img
                width={16}
                className="mr-1"
                src="./img/movie24H/comment.png"
                alt=""
              />{" "}
              <small>0</small>
            </div>
          </div>
          <div className="col-xs-6 col-md-6 text-left article">
            <img
              className="article"
              width="100%"
              height={250.25}
              src="./img/movie24H/khong-pho-truong-cau-ky-nhung-loi-tu-biet-lai-lam-mua-lam-gio-tai-cac-lhp-nam-nay-15687978515107.jpg"
              alt=""
            />
            <article className="text-left">
              <p>
                Không phô trương, cầu kỳ nhưng Lời Từ Biệt lại đang 'làm mưa làm
                gió' tại các LHP trong năm nay
              </p>
              <small>
                Sau Ocean's 8 và Crazy Rich Asians, Awkwafina trở lại đảm nhận
                vai chính "nặng đô" trong tác phẩm này.
              </small>
            </article>
            <div className="col-xs-12 col-md-12 comment-footer">
              <img
                width={16}
                className="mr-1"
                src="./img/movie24H/like.png"
                alt=""
              />{" "}
              <small>0</small>
              <img
                width={16}
                className="mr-1"
                src="./img/movie24H/comment.png"
                alt=""
              />{" "}
              <small>0</small>
            </div>
          </div>
        </div>
        <div className="row text-left py-4">
          <div className="col-xs-4 col-md-4 article">
            <img
              width="100%"
              src="./img/movie24H/sieu-pha-m-hoa-t-hi-nh-trung-quo-c-na-tra-ma-dong-giang-the-chi-nh-thu-c-do-bo-pho-ng-chie-u-vie-t-nam-15686321271183.jpg"
              alt=""
            />
            <article>
              <p>
                Siêu phẩm hoạt hình Trung Quốc - Na Tra: Ma Đồng Giáng Thế chính
                thức đổ bộ...{" "}
              </p>
              <small>
                Thu về 1,5 triệu USD tại Bắc Mỹ chỉ trong tuần đầu công chiếu,
                liệu phim sẽ thành công tại phòng vé Việt?
              </small>
            </article>
            <div className="col-xs-12 col-md-12 comment-footer">
              <img
                width={16}
                className="mr-1"
                src="./img/movie24H/like.png"
                alt=""
              />{" "}
              <small>0</small>
              <img
                width={16}
                className="mr-1"
                src="./img/movie24H/comment.png"
                alt=""
              />{" "}
              <small>0</small>
            </div>
          </div>
          <div className="col-xs-4 col-md-4 article">
            <img
              width="100%"
              src="./img/movie24H/32d0bd38187415dc665dc0883db6ed22.jpg"
              alt=""
            />
            <article>
              <p>
                Bạn còn nhớ hay đã quên nhóm bạn Losers' Club đối đầu với hề
                Pennywise?
              </p>
              <small>
                27 năm sau, liệu họ có đủ "mạnh" diệt It một lần và mãi mãi?
              </small>
            </article>
            <div className="col-xs-12 col-md-12 comment-footer">
              <img
                width={16}
                className="mr-1"
                src="./img/movie24H/like.png"
                alt=""
              />{" "}
              <small>0</small>
              <img
                width={16}
                className="mr-1"
                src="./img/movie24H/comment.png"
                alt=""
              />{" "}
              <small>0</small>
            </div>
          </div>
          <div className="col-xs-4 col-md-4 article">
            <div className="col-xs-12 pb-2 ">
              <img
                height="50px"
                width="50px"
                src="./img/movie24H/sony-va-disney-chia-tay-doi-spider-man-ai-la-nguoi-chiu-thiet-15663897016796.jpg"
                alt=""
              />

              <p className="text-sale float-right">
                Sony và Disney 'chia tay đòi Spider-Man' - Ai là người chịu ...
              </p>
            </div>
            <div className="col-xs-12 pb-2">
              <img
                height="50px"
                width="50px"
                src="./img/movie24H/quai-vat-bien-sau-tro-lai-trong-hung-than-dai-duong-tham-sat-15662889445157.jpg"
                alt=""
              />

              <p className="text-sale float-right">
                Quái vật biển sâu trở lại trong Hung Thần Đại Dương: Thảm ...
              </p>
            </div>
            <div className="col-xs-12 pb-2">
              <img
                height="50px"
                width="50px"
                src="./img/movie24H/3-ly-do-khien-ban-khong-the-bo-qua-sieu-pham-kinh-di-giat-gan-hap-dan-nhat-thang-8-15662106459703.jpg"
                alt=""
              />

              <p className="text-sale float-right">
                3 lý do khiến bạn khó lòng bỏ qua siêu phẩm kinh dị, giật gân{" "}
              </p>
            </div>
            <div className="col-xs-12 pb-2">
              <img
                height="50px"
                width="50px"
                src="./img/movie24H/conan-va-nhung-phan-phim-gay-sot-tren-man-anh-rong-viet-nam-15661546682102.jpg"
                alt=""
              />

              <p className="text-sale float-right">
                Conan và những phần phim gây sốt trên màn ảnh rộng Việt Nam
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default sale;
