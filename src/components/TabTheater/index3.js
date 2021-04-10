import React, { useState, useEffect } from "react";
import { qlPhimService } from "../../services/QuanLyPhimService";
import { NavLink } from "react-router-dom";
import "./style.css";
import Image from "../../../src/assets/image/background/bgContact.jpg";
// component loading

let moment = require("moment"); // require

export default function TabTheaters2(props) {
  // Xem trong data.json lấy từ api về xem là dấu ngoặc nhọn {} hay dấu ngoặc vuông []
  //Lưu ý ngoặc nhọn {} là object, còn dấu ngoặc vuông [] là mảng phải phân biệt được tụi nó
  // let [phim, setPhim] = useState({});
  let [phim, setPhim] = useState([]);
  let [phimCS, setPhimCS] = useState([]);
  let [phimG, setPhimG] = useState([]);
  let [phimLC, setPhimLC] = useState([]);
  let [phimMGS, setPhimMGS] = useState([]);
  // const [select, setSelect] = useState(0);

  useEffect(() => {
    qlPhimService.layThongTinPhongVeCGV().then((result) => {
      console.log(result.data);
      setPhim(result.data);
    });
  }, []);

  useEffect(() => {
    qlPhimService.layThongTinPhongVeCineStar().then((result) => {
      console.log(result.data);
      setPhimCS(result.data);
    });
  }, []);

  useEffect(() => {
    qlPhimService.layThongTinPhongVeGalaxy().then((result) => {
      console.log(result.data);
      setPhimG(result.data);
    });
  }, []);

  useEffect(() => {
    qlPhimService.layThongTinPhongVeLotteCinema().then((result) => {
      console.log(result.data);
      setPhimLC(result.data);
    });
  }, []);

  useEffect(() => {
    qlPhimService.layThongTinPhongVeMegaGS().then((result) => {
      console.log(result.data);
      setPhimMGS(result.data);
    });
  }, []);
  // const [active, setActive] = useState(0);
  // const handleClick = (e) => {
  //   const index = parseInt(e.target.id, 0);
  //   if (index !== active) {
  //     setActive(index);
  //   }
  // };
  console.log("phim", phim);
  return (
    <div
      className="tabTheater__first mt-3 "
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="container tabTheater__content  ">
        <div className="tabTheater__overplay">
          <h2 className="tabTheater__info" id="infoTheater">
            Thông Tin Lịch Chiếu
          </h2>
          <div className="row">
            <div
              className="nav flex-column nav-pills col-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {phim?.map((heThongRap, index) => {
                return (
                  <a
                    key={index}
                    className="nav-link tabTheater__active active  "
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    // href={`#${heThongRap.maHeThongRap}`}
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                    data-bs-target="#v-pills-home"
                  >
                    <img
                      src={heThongRap.logo}
                      style={{ width: 50, height: 50, margin: 5 }}
                      alt={heThongRap.logo}
                    />
                    {heThongRap.tenHeThongRap}
                  </a>
                );
              })}
              {phimCS?.map((heThongRap, index) => {
                return (
                  <a
                    key={index}
                    className="nav-link tabTheater__active   "
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    // href={`#${heThongRap.maHeThongRap}`}
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                    data-bs-target="#v-pills-profile"
                  >
                    <img
                      src={heThongRap.logo}
                      style={{ width: 50, height: 50, margin: 5 }}
                      alt={heThongRap.logo}
                    />
                    {heThongRap.tenHeThongRap}
                  </a>
                );
              })}
              {phimG?.map((heThongRap, index) => {
                return (
                  <a
                    key={index}
                    className="nav-link tabTheater__active  "
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    // href={`#${heThongRap.maHeThongRap}`}
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                    data-bs-target="#v-pills-messages"
                  >
                    <img
                      src={heThongRap.logo}
                      style={{ width: 50, height: 50, margin: 5 }}
                      alt={heThongRap.logo}
                    />
                    {heThongRap.tenHeThongRap}
                  </a>
                );
              })}
              {phimLC?.map((heThongRap, index) => {
                return (
                  <a
                    key={index}
                    className="nav-link tabTheater__active   "
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    // href={`#${heThongRap.maHeThongRap}`}
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                    data-bs-target="#v-pills-settings"
                  >
                    <img
                      src={heThongRap.logo}
                      style={{ width: 50, height: 50, margin: 5 }}
                      alt={heThongRap.logo}
                    />
                    {heThongRap.tenHeThongRap}
                  </a>
                );
              })}
              {phimMGS?.map((heThongRap, index) => {
                return (
                  <a
                    key={index}
                    className="nav-link tabTheater__active   "
                    id="v-pills-control-tab"
                    data-bs-toggle="pill"
                    href={`#${heThongRap.maHeThongRap}`}
                    role="tab"
                    aria-controls="v-pills-control"
                    aria-selected="false"
                    data-bs-target="#v-pills-control"
                  >
                    <img
                      src={heThongRap.logo}
                      style={{ width: 50, height: 50, margin: 5 }}
                      alt={heThongRap.logo}
                    />
                    {heThongRap.tenHeThongRap}
                  </a>
                );
              })}
            </div>
            <div className="col-9 ">
              <div className="tab-content" id="v-pills-tabContent">
                {phim?.map((heThongRap, index) => {
                  return (
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div className="row">
                        <div
                          // onClick={handleClick}
                          // active={active === 0}
                          // id={0}
                          className="col-4 d-none  d-lg-block tabTheater__list"
                        >
                          {heThongRap.lstCumRap
                            ?.slice(0, 5)
                            .map((cumRap, index) => {
                              return (
                                // <div className="col-6" key={index.maCumRap}>
                                <div key={index.maCumRap}>
                                  <h4 className="tabTheater__cumRap mb-2">
                                    {cumRap.tenCumRap}
                                  </h4>
                                </div>
                              );
                            })}
                        </div>
                        <div className="col-8  col-sm-11 col-lg-8 text-center">
                          {/* <Content active={active === 0}> */}

                          {heThongRap.lstCumRap?.map((cumRap, index) => {
                            return (
                              <div>
                                {cumRap.danhSachPhim
                                  ?.slice(0, 1)
                                  .map((phim, index) => {
                                    return (
                                      <div className="tabTheater__listPhim">
                                        <img
                                          style={{ width: 250, height: 150 }}
                                          src={phim.hinhAnh}
                                          alt=""
                                        />
                                        <h2 className="text-info">
                                          {phim.tenPhim}
                                        </h2>
                                        <div className="row">
                                          {phim.lstLichChieuTheoPhim
                                            ?.slice(0, 5)
                                            .map((phimU, index) => {
                                              return (
                                                <div className="col-6 col-sm-4 col-lg-4 col-xl-3 p-0">
                                                  {/* <h5>{phimU.tenRap} - {phimU.giaVe}</h5> */}
                                                  <span className="m-1 p-0">
                                                    <NavLink
                                                      to={`/ticketRoom/${phim.maPhim}`}
                                                      className="btn btn-danger my-1  "
                                                    >
                                                      {moment(
                                                        phimU.ngayChieuGioChieu
                                                      ).format("hh:mm A")}
                                                    </NavLink>
                                                  </span>
                                                </div>
                                              );
                                            })}
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            );
                          })}
                          {/* </Content> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
                {phimCS?.map((heThongRap, index) => {
                  return (
                    <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <div className="row">
                        <div
                          // onClick={handleClick}
                          // active={active === 0}
                          // id={0}
                          className="col-4 d-none  d-lg-block tabTheater__list"
                        >
                          {heThongRap.lstCumRap?.map((cumRap, index) => {
                            return (
                              // <div className="col-6" key={index.maCumRap}>
                              <div key={index.maCumRap}>
                                <h4 className="tabTheater__cumRap mb-2">
                                  {cumRap.tenCumRap}
                                </h4>
                              </div>
                            );
                          })}
                        </div>
                        <div className="col-8  col-sm-11 col-lg-8 text-center">
                          {/* <Content active={active === 0}> */}
                          {heThongRap.lstCumRap?.map((cumRap, index) => {
                            return (
                              <div>
                                {cumRap.danhSachPhim
                                  ?.slice(0, 3)
                                  .map((phim, index) => {
                                    return (
                                      <div className="tabTheater__listPhim">
                                        <img
                                          style={{ width: 250, height: 150 }}
                                          src={phim.hinhAnh}
                                          alt=""
                                        />
                                        <h4 className="text-info">
                                          {phim.tenPhim}
                                        </h4>
                                        <div className="row">
                                          {phim.lstLichChieuTheoPhim
                                            ?.slice(0, 5)
                                            .map((phimU, index) => {
                                              return (
                                                <div className="col-6 col-sm-4 col-lg-4 col-xl-3 p-0">
                                                  {/* <h5>{phimU.tenRap} - {phimU.giaVe}</h5> */}
                                                  <span className="m-1 p-0">
                                                    <NavLink
                                                      to={`/ticketRoom/${phim.maPhim}`}
                                                      className="btn btn-danger my-1  "
                                                    >
                                                      {moment(
                                                        phimU.ngayChieuGioChieu
                                                      ).format("hh:mm A")}
                                                    </NavLink>
                                                  </span>
                                                </div>
                                              );
                                            })}
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            );
                          })}
                          {/* </Content> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
                {phimG?.map((heThongRap, index) => {
                  return (
                    <div
                      className="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <div className="row">
                        <div
                          // onClick={handleClick}
                          // active={active === 0}
                          // id={0}
                          className="col-4 d-none  d-lg-block tabTheater__list"
                        >
                          {heThongRap.lstCumRap?.map((cumRap, index) => {
                            return (
                              // <div className="col-6" key={index.maCumRap}>
                              <div key={index.maCumRap}>
                                <h4 className="tabTheater__cumRap mb-2">
                                  {cumRap.tenCumRap}
                                </h4>
                              </div>
                            );
                          })}
                        </div>
                        <div className="col-8  col-sm-11 col-lg-8 text-center">
                          {/* <Content active={active === 0}> */}
                          {heThongRap.lstCumRap?.map((cumRap, index) => {
                            return (
                              <div>
                                {cumRap.danhSachPhim
                                  ?.slice(0, 2)
                                  .map((phim, index) => {
                                    return (
                                      <div className="tabTheater__listPhim">
                                        <img
                                          style={{ width: 250, height: 150 }}
                                          src={phim.hinhAnh}
                                          alt=""
                                        />
                                        <h4 className="text-info">
                                          {phim.tenPhim}
                                        </h4>
                                        <div className="row">
                                          {phim.lstLichChieuTheoPhim
                                            ?.slice(0, 5)
                                            .map((phimU, index) => {
                                              return (
                                                <div className="col-6 col-sm-4 col-lg-4 col-xl-3 p-0">
                                                  {/* <h5>{phimU.tenRap} - {phimU.giaVe}</h5> */}
                                                  <span className="m-1 p-0">
                                                    <NavLink
                                                      to={`/ticketRoom/${phim.maPhim}`}
                                                      className="btn btn-danger my-1  "
                                                    >
                                                      {moment(
                                                        phimU.ngayChieuGioChieu
                                                      ).format("hh:mm A")}
                                                    </NavLink>
                                                  </span>
                                                </div>
                                              );
                                            })}
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            );
                          })}
                          {/* </Content> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
                {phimLC?.map((heThongRap, index) => {
                  return (
                    <div
                      className="tab-pane fade"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <div className="row">
                        <div
                          // onClick={handleClick}
                          // active={active === 0}
                          // id={0}
                          className="col-4 d-none  d-lg-block tabTheater__list"
                        >
                          {heThongRap.lstCumRap?.map((cumRap, index) => {
                            return (
                              // <div className="col-6" key={index.maCumRap}>
                              <div key={index.maCumRap}>
                                <h4 className="tabTheater__cumRap mb-2">
                                  {cumRap.tenCumRap}
                                </h4>
                              </div>
                            );
                          })}
                        </div>
                        <div className="col-8  col-sm-11 col-lg-8 text-center">
                          {/* <Content active={active === 0}> */}
                          {heThongRap.lstCumRap?.map((cumRap, index) => {
                            return (
                              <div>
                                {cumRap.danhSachPhim
                                  ?.slice(0, 3)
                                  .map((phim, index) => {
                                    return (
                                      <div className="tabTheater__listPhim">
                                        <img
                                          style={{ width: 250, height: 150 }}
                                          src={phim.hinhAnh}
                                          alt=""
                                        />
                                        <h4 className="text-info">
                                          {phim.tenPhim}
                                        </h4>
                                        <div className="row">
                                          {phim.lstLichChieuTheoPhim
                                            ?.slice(0, 5)
                                            .map((phimU, index) => {
                                              return (
                                                <div className="col-6 col-sm-4 col-lg-4 col-xl-3 p-0">
                                                  {/* <h5>{phimU.tenRap} - {phimU.giaVe}</h5> */}
                                                  <span className="m-1 p-0">
                                                    <NavLink
                                                      to={`/ticketRoom/${phim.maPhim}`}
                                                      className="btn btn-danger my-1  "
                                                    >
                                                      {moment(
                                                        phimU.ngayChieuGioChieu
                                                      ).format("hh:mm A")}
                                                    </NavLink>
                                                  </span>
                                                </div>
                                              );
                                            })}
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            );
                          })}
                          {/* </Content> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
                {phimMGS?.map((heThongRap, index) => {
                  return (
                    <div
                      className="tab-pane fade"
                      id="v-pills-control"
                      role="tabpanel"
                      aria-labelledby="v-pills-control-tab"
                    >
                      <div className="row">
                        <div
                          // onClick={handleClick}
                          // active={active === 0}
                          // id={0}
                          className="col-4 d-none  d-lg-block tabTheater__list"
                        >
                          {heThongRap.lstCumRap?.map((cumRap, index) => {
                            return (
                              // <div className="col-6" key={index.maCumRap}>
                              <div key={index.maCumRap}>
                                <h4 className="tabTheater__cumRap mb-2">
                                  {cumRap.tenCumRap}
                                </h4>
                              </div>
                            );
                          })}
                        </div>
                        <div className="col-8  col-sm-11 col-lg-8 text-center">
                          {/* <Content active={active === 0}> */}
                          {heThongRap.lstCumRap?.map((cumRap, index) => {
                            return (
                              <div>
                                {cumRap.danhSachPhim
                                  ?.slice(0, 3)
                                  .map((phim, index) => {
                                    return (
                                      <div className="tabTheater__listPhim">
                                        <img
                                          style={{ width: 250, height: 150 }}
                                          src={phim.hinhAnh}
                                          alt=""
                                        />
                                        <h4 className="text-info">
                                          {phim.tenPhim}
                                        </h4>
                                        <div className="row">
                                          {phim.lstLichChieuTheoPhim
                                            ?.slice(0, 5)
                                            .map((phimU, index) => {
                                              return (
                                                <div className="col-6 col-sm-4 col-lg-4 col-xl-3 p-0">
                                                  {/* <h5>{phimU.tenRap} - {phimU.giaVe}</h5> */}
                                                  <span className="m-1 p-0">
                                                    <NavLink
                                                      to={`/ticketRoom/${phim.maPhim}`}
                                                      className="btn btn-danger my-1  "
                                                    >
                                                      {moment(
                                                        phimU.ngayChieuGioChieu
                                                      ).format("hh:mm A")}
                                                    </NavLink>
                                                  </span>
                                                </div>
                                              );
                                            })}
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            );
                          })}
                          {/* </Content> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
