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
    return (
      <div>
        <button className="btn btn-danger" onClick={this.props.logout}>
          <NavLink className="nav-link" to="/login">
            Đăng Xuất
          </NavLink>
        </button>
        <h3>Đăng Nhập</h3>
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
export default connect(null, { login: login, logout: logout })(Login);
