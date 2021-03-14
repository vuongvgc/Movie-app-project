import React, { Component } from "react";
import ButtonWhite from "../Buttons/ButtonWhite";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
class StatusAuth extends Component {
  render() {
    console.log(this.props);
    if (this.props.currentUser) {
      return (
        <NavLink className="nav-link active" aria-current="page" to="/login">
          Chào, {this.props.currentUser.hoTen}
        </NavLink>
      );
    } else {
      return (
        <div>
          <ul className="navbar nav">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/login"
              >
                <ButtonWhite name="Đăng Nhập" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/register"
              >
                <ButtonWhite name="Đăng Ký" />
              </NavLink>
            </li>
          </ul>
        </div>
      );
    }
  }
}
const mapStateToProp = (state) => {
  return {
    currentUser: state.authReducers.currentUser,
  };
};
export default connect(mapStateToProp, null)(StatusAuth);
