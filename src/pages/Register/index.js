import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/Auth";
import RegisterForm from "../../components/RegisterForm";
import "./style.css";
import SnackBar from "../../components/Snackbar";
class Login extends Component {
  onSubmit = (formValue) => {
    this.props.register(formValue);
  };
  render() {
    // console.log(this.props.currentUser);
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
        <SnackBar isOpen={true} title="Đăng ký thành công" severity="success" />
        <SnackBar
          isOpen={this.props.register.error}
          title="Đăng ký  thất bại"
          severity="warning"
        />
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    currentUser: state.authReducers.currentUser,
    error: state.authReducers.registerStatus,
    register: state.authReducers.register,
  };
};
export default connect(mapStateToProp, { register: register })(Login);
