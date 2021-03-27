import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import RegisterForm from "../RegisterForm";
import { connect } from "react-redux";
import { register } from "../../actions/Auth";
class Modal extends React.Component {
  onSubmit = (formValue) => {
    console.log(formValue);
  };
  render() {
    const color = {
      backgroundColor: "rgba(0,0,0,0.5)",
    };
    return ReactDOM.createPortal(
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <header className="head-form mb-0 text-center m-2">
              <h3 id="header-title">Cập Nhật Thông Tin</h3>
            </header>
            <div className="modal-body">
              <RegisterForm admin={true} onSubmit={this.onSubmit} />
            </div>
          </div>
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }
}
export default connect(null, { register })(Modal);
