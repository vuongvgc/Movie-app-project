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
      <div>
        <h3> Đăng Nhập </h3>
        <LoginForm onSubmit={this.onSubmit} wrongAuth={this.props.error} />
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
