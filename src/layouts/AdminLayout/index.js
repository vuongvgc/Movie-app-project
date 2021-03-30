import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import { NavLink, useParams, useHistory, useLocation } from "react-router-dom";
export default function AdminLayout(props) {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  // console.log("Header", location.pathname);
  let activeUrl = location.pathname;
  return (
    <div className="admin-layout__box">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 border border-secondary">
            <NavLink
              to="/admin/users"
              className={
                activeUrl === "/admin/users"
                  ? "nav-link user_detail__nav active_link"
                  : "nav-link user_detail__nav"
              }
            >
              <div>Quản Lý Người Dùng</div>
            </NavLink>
            <NavLink
              to="/admin/movies"
              className={
                activeUrl === "/admin/movies"
                  ? "nav-link user_detail__nav active_link"
                  : "nav-link user_detail__nav"
              }
            >
              <div>Quản Lý Phim</div>
            </NavLink>
          </div>
          <div className="col-10 border border-secondary">{props.children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
