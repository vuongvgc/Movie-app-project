import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import { NavLink, useLocation } from "react-router-dom";
export default function AdminLayout(props) {
  const location = useLocation();
  // console.log("Header", location.pathname);
  let activeUrl = location.pathname;
  return (
    <div className="admin-layout__box ">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-2 border border-lg-secondary">
            <div className="d-block d-sm-flex d-lg-block">
              <NavLink
                to="/admin/users"
                className={
                  activeUrl === "/admin/users"
                    ? "nav-link user_detail__nav active_link"
                    : "nav-link user_detail__nav"
                }
              >
                <p>Quản Lý Người Dùng</p>
              </NavLink>
              <NavLink
                to="/admin/movies"
                className={
                  activeUrl === "/admin/movies"
                    ? "nav-link user_detail__nav active_link"
                    : "nav-link user_detail__nav"
                }
              >
                <p>Quản Lý Phim</p>
              </NavLink>
              <NavLink
                to="/user/information"
                className="nav-link user_detail__nav"
              >
                <p>Thông Tin Cá Nhân</p>
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-lg-10 border border-lg-secondary ">
            {props.children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
