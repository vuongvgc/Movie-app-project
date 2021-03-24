import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import { NavLink, useParams, useHistory, useLocation } from "react-router-dom";
export default function UserDetail(props) {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  console.log("Header", location.pathname);
  let activeUrl = location.pathname;
  return (
    <div className="user_detail__box">
      <Header />
      <div className="container-fluid">
        <h2 className="text-center">Thông tin cá nhân</h2>
        <div className="row">
          <div className="col-2 border border-secondary">
            <NavLink
              to="/user/information"
              className={
                activeUrl === "/user/information"
                  ? "nav-link user_detail__nav active_link"
                  : "nav-link user_detail__nav"
              }
            >
              <div>Thông tin người dùng</div>
            </NavLink>
            <NavLink
              to="/user/movie"
              className={
                activeUrl === "/user/movie"
                  ? "nav-link user_detail__nav active_link"
                  : "nav-link user_detail__nav"
              }
            >
              <div>Lịch sử đặt vé</div>
            </NavLink>
          </div>
          <div className="col-10 border border-secondary">{props.children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
