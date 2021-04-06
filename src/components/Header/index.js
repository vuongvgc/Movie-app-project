import React from "react";
import { NavLink } from "react-router-dom";
import StatusAuth from "../StatusAuth";
import "./style.css";
import ScrollToTop from "./ScrollToTop";
export default function Header(props) {
  return (
    <div>
      <div className="fixed-top header__top" >
        <nav className="navbar  navbar-expand-lg  navbar-dark bg-primary  movie__header  ">
          <div className="container-fluid homepage__navbar">

            <NavLink className="navbar-brand" to="/">
              <img
                className="img__header d-none d-lg-block "
                src="../img/VPVlogo.png"
                alt=""
              />
            </NavLink>
            <button
              className="navbar-toggler my-3 "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="  d-xs-block d-sm-flex   navbar nav  mx-auto">
                <li className="nav-item movie__nav__item ">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Trang Chủ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#infoTheater"
                  >
                    Cụm Rạp
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#footer"
                  >
                    Liên Hệ
                  </a>
                </li>
              </ul>
              <StatusAuth />
            </div>
          </div>
        </nav>
      </div>
      <ScrollToTop />
    </div>
  );
}
