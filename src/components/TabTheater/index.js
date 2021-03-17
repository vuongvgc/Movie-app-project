import React, { useState, useEffect } from "react";
import { qlPhimService } from "../../services/QuanLyPhimService";
import { NavLink } from "react-router-dom";

let moment = require("moment"); // require

export default function TabTheaters(props) {
  let [phim, setPhim] = useState({});

  useEffect(() => {
    qlPhimService.layThongTinPhim().then((result) => {
      console.log(result.data);
      setPhim(result.data);
    });
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
                  data-toggle="pill"
                  href={`#${heThongRap.maHeThongRap}`}
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <img
                    src={heThongRap.logo}
                    style={{ width: 30, height: 30 }}
                    alt={heThongRap.logo}
                  />{" "}
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
