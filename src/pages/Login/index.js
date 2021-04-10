import React, { Component } from "react";
import { connect } from "react-redux";
import { login, logout } from "../../actions/Auth";
import LoginForm from "../../components/LoginForm";
import "./style.css";
class Login extends Component {
  onSubmit = (formValue) => {
    this.props.login(formValue);
  };
  render() {
    // console.log(this.props.currentUser);
    return (
      <div className="login__box row">
        <div className="d-none d-md-flex col-md-6 login_background"></div>
        <div className="col-12 col-md-6 login-form_box">
          <h3> Đăng Nhập </h3>
          <div className="col-10">
            <LoginForm onSubmit={this.onSubmit} wrongAuth={this.props.error} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    currentUser: state.authReducers.currentUser,
    error: state.authReducers.error,
  };
};
export default connect(mapStateToProp, { login: login, logout: logout })(Login);
