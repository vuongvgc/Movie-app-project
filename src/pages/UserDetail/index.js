import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import { NavLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";
function UserDetail(props) {
  const location = useLocation();
  let activeUrl = location.pathname;
  return (
    <div className="user_detail__box">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-2 border mx-auto border-secondary d-block d-sm-flex d-lg-block">
            <NavLink
              to="/user/information"
              className={
                activeUrl === "/user/information"
                  ? "nav-link user_detail__nav active_link"
                  : "nav-link user_detail__nav"
              }
            >
              <p>Thông tin người dùng</p>
            </NavLink>
            <NavLink
              to="/user/movie"
              className={
                activeUrl === "/user/movie"
                  ? "nav-link user_detail__nav active_link"
                  : "nav-link user_detail__nav"
              }
            >
              <p>Lịch sử đặt vé</p>
            </NavLink>
            <NavLink
              to="/admin/users"
              className={
                activeUrl === "/admin/user"
                  ? "nav-link user_detail__nav active_link"
                  : "nav-link user_detail__nav"
              }
            >
              <p>Quản Lý Trang Movie</p>
            </NavLink>
          </div>
          <div className="col-12 col-lg-10 border border-secondary">
            {props.children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.authReducers.currentUser,
  };
};

export default connect(mapStateToProps)(UserDetail);
