import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/Auth";
import RegisterForm from "../../components/RegisterForm";
import "./style.css";
import SnackBar from "../../components/Snackbar";
import DialogAlert from "../../components/DialogAlert";
class Login extends Component {
  onSubmit = (formValue) => {
    this.props.register(formValue);
  };
  render() {
    // console.log(this.props.register);
    return (
      <div className="register__box row">
        <div className="d-none d-md-flex col-md-6 register_background"></div>
        <div className="col-12 col-md-6 register-form_box">
          <div>
            <h3>Đăng Ký</h3>
            <RegisterForm
              onSubmit={this.onSubmit}
              wrongAuth={this.props.error}
            />
          </div>
        </div>
        <DialogAlert isOpen={this.props.registerStatus.success} />
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    currentUser: state.authReducers.currentUser,
    error: state.authReducers.registerStatus,
    registerStatus: state.authReducers.register,
  };
};
export default connect(mapStateToProp, { register: register })(Login);
