import React, { Component } from "react";
import "./modalLogin.css";

class modalPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "connected",
      authResponse: {
        accessToken: "...",
        expiresIn: "...",
        signedRequest: "...",
        userID: "..."
      }
    };
  }

  render() {
    return (
      <div className="container">
        {/* The Modal */}
        <div className="modal modal-bg" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h1 className="modal-title ">Login</h1>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <div className="form-group">
                  <label className="title" htmlFor="true">
                    Email / Phone
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Nhập email"
                    aria-describedby="helpId"
                  />
                </div>
                <div className="form-group">
                  <label className="title" htmlFor="true">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Nhập password"
                    aria-describedby="helpId"
                  />
                </div>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default modalPopup;
