import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import RegisterForm from "../RegisterForm";
import { connect } from "react-redux";
import { addUser } from "../../actions/Admin";
import _ from "lodash";
class Modal extends React.Component {
  onSubmit = (formValue) => {
    // console.log(formValue);
    this.props.addUser(formValue, this.props.accessToken);
  };
  render() {
    return ReactDOM.createPortal(
      <div className="modal fade" id={this.props.idModal}>
        <div className="modal-dialog">
          <div className="modal-content">
            <header className="head-form mb-0 text-center m-2">
              <h3 id="header-title">{this.props.title}</h3>
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
const mapStateToProps = (state) => {
  return {
    accessToken: state.authReducers.currentUser.accessToken,
  };
};
export default connect(mapStateToProps, { addUser })(Modal);
