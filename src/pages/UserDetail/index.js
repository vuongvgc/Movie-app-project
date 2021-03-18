import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import { NavLink } from "react-router-dom";
export default class UserDetail extends Component {
  render() {
    return (
      <div className="user_detail__box">
        <Header />
        <div className="container-fluid">
          <h2 className="text-center">Thông tin cá nhân</h2>
          <div className="row">
            <div className="col-2 border border-secondary">
              <NavLink
                to="/user/information"
                className="nav-link user_detail__nav"
              >
                <div>Thông tin người dùng</div>
              </NavLink>
              <NavLink to="/user/movie" className="nav-link user_detail__nav">
                <div>Lịch sử đặt vé</div>
              </NavLink>
            </div>
            <div className="col-10 border border-secondary">
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
