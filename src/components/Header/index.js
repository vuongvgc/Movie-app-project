import React from "react";
import { NavLink } from "react-router-dom";
import StatusAuth from "../StatusAuth";
import './style.css'
export default function Header(props) {
  return (
    <div>
      <div >
        <nav className="fixed-top navbar navbar-expand-lg  navbar-light bg-dark  movie__header ">
          <div className="container-fluid homepage__navbar">

            <NavLink className="navbar-brand" to="/">
              <img className="gif__header" src="https://media.giphy.com/media/Z9QGyT1RQL00318Lzz/giphy.gif" alt="" />
            </NavLink>
            <button
              className="navbar-toggler"
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
              <ul className=" navbar nav  mx-auto">
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
                  <NavLink className="nav-link" to="/">
                    Cụm Rạp
                  </NavLink>
                </li>
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Phim
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#pills-home">
                        Đang Chiếu
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#pills-profile">
                        Sắp Chiếu
                      </a>
                    </li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link active"
                    aria-current="page" href="#footer">
                    Liên Hệ
                      </a>

                </li>
              </ul>
              {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
              <StatusAuth />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
