import React, { Component } from "react";
import ButtonWhite from "../Buttons/ButtonWhite";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/Auth";
class StatusAuth extends Component {
  render() {
    console.log(this.props);
    if (this.props.currentUser) {
      return (
        <ul className="navbar nav">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/login">
              Chào, {this.props.currentUser.hoTen}
            </NavLink>
          </li>
          <li className="nav-item" onClick={() => this.props.logout()}>
            <NavLink className="nav-link active" aria-current="page" to="/">
              Đăng Xuất
            </NavLink>
          </li>
        </ul>
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
export default connect(mapStateToProp, { logout: logout })(StatusAuth);
