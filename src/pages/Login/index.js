import React, { Component } from "react";
import { connect } from "react-redux";
import { login, logout } from "../../actions/Auth";
import LoginForm from "../../components/LoginForm";
import { NavLink } from "react-router-dom";
import "./style.css";
class Login extends Component {
  onSubmit = (formValue) => {
    this.props.login(formValue);
  };
  render() {
    // console.log(this.props.currentUser);
    return (
      <div>
        <h3>Đăng Nhập</h3>
        <LoginForm onSubmit={this.onSubmit} />
        <button className="btn btn-danger" onClick={() => this.props.logout()}>
          <NavLink className="nav-link" to="/">
            Đăng Xuất
          </NavLink>
        </button>
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    currentUser: state.authReducers.currentUser,
  };
};
export default connect(mapStateToProp, { login: login, logout: logout })(Login);
