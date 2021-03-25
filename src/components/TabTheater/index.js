import React, { useState, useEffect } from "react";
import { qlPhimService } from "../../services/QuanLyPhimService";
import { NavLink } from "react-router-dom";

let moment = require("moment"); // require

export default function TabTheaters(props) {
  let [phim, setPhim] = useState({});
  let [phimSapChieu, setDanhSachPhimSapChieu] = useState([]);
  const renderDanhSachPhimSapChieu = () => {
    return phimSapChieu.map((phim, index) => {
      return <div key={index} className="col-3">
        <div className="card text-left top__Search ">
          <div className="top__Search__overlay"></div>
          <div className="top__Search__play">
            <a className="" data-fancybox href={phim.trailer}>
              <i className="fa fa-play" />
            </a>
            <p>
              <NavLink to={`/movie/${phim.maPhim}`} className="btn btn-success">Đặt vé</NavLink>
            </p>

          </div>

          <img style={{ width: '100%' }} className="card-img-top  img__topSearch img-fluid " src={phim.hinhAnh} alt={phim.hinhAnh} />
          <div className="card-body">
            <h6 className="card-title top__Search__title">{phim.tenPhim}</h6>
            {/* <NavLink to={`/movie/${phim.maPhim}`} className="btn btn-success">Đặt vé</NavLink> */}
          </div>
        </div>

      </div>
    })
  }


  // console.log(props);
  useEffect(() => {
    qlPhimService.layThongTinPhim().then(result => {
      console.log(result.data);
      setPhim(result.data);
    });
  }, []);
  useEffect(() => {
    qlPhimService.layDanhSachPhimSapChieu().then(result => {
      console.log(result.data);
      setDanhSachPhimSapChieu(result.data);
    }).catch(errors => {
      console.log(errors.response.data);
    })
  }, []);
  return (
    <div className="container mt-3">
      <div className="container">
        <h3>Thông tin lịch chiếu</h3>
        <hr />
        <div className="row">
          <div
            className="nav flex-column nav-pills col-4"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {phim.heThongRapChieu?.map((heThongRap, index) => {
              return (
                <a
                  key={index}
                  className="nav-link"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  href={`#${heThongRap.maHeThongRap}`}
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <img
                    src={heThongRap.logo}
                    style={{ width: 30, height: 30 }}
                    alt={heThongRap.logo}
                  />
                  {heThongRap.tenHeThongRap}
                </a>
              );
            })}
          </div>
          <div className="tab-content col-8" id="v-pills-tabContent">

            {phim.heThongRapChieu?.map((heThongRap, index) => {
              return (
                <div
                  className="tab-pane fade show "
                  id={heThongRap.maHeThongRap}
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  {heThongRap.cumRapChieu?.map((cumRap, index) => {
                    return (
                      <div key={index.maCumRap}>
                        <h3>{cumRap.tenCumRap}</h3>
                        <div className="row">
                          {cumRap.lichChieuPhim
                            ?.slice(0, 12)
                            .map((lichChieu, index) => {
                              return (
                                <NavLink
                                  className="col-2"
                                  key={lichChieu.maLichChieu}
                                  to={`/showtime/${lichChieu.maLichChieu}`}
                                >
                                  {moment(lichChieu.ngayChieuGioChieu).format(
                                    "hh:mm A"
                                  )}
                                </NavLink>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
                  {/* {renderDanhSachPhimSapChieu()} */}
                </div>
              );
            })}
            {/* <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
