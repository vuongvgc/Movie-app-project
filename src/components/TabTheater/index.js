import React, { useState, useEffect } from "react";
import { qlPhimService } from "../../services/QuanLyPhimService";
import { NavLink } from "react-router-dom";
import { Tabs, Tab, Content } from './tab.js'
import './style.css'

let moment = require("moment"); // require


export default function TabTheaters(props) {
    // Xem trong data.json lấy từ api về xem là dấu ngoặc nhọn {} hay dấu ngoặc vuông []
    //Lưu ý ngoặc nhọn {} là object, còn dấu ngoặc vuông [] là mảng phải phân biệt được tụi nó
    // let [phim, setPhim] = useState({});
    let [phim, setPhim] = useState([]);
    // const [select, setSelect] = useState(0);

    useEffect(() => {
        qlPhimService.layThongTinPhim().then((result) => {
            console.log(result.data);
            setPhim(result.data);
        });
    }, []);
    const [active, setActive] = useState(0);
    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    }
    console.log("phim", phim);
    return (
        <div className="container mt-3">
            <div className="container">
                <h3>Thông tin lịch chiếu</h3>
                <hr />
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
                                    className="nav-link tabTheater__active "
                                    id="v-pills-home-tab"
                                    data-bs-toggle="pill"
                                    href={`#${heThongRap.maHeThongRap}`}
                                    role="tab"
                                    aria-controls="v-pills-home"
                                    aria-selected="true"
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
                                        className="tab-pane fade show"
                                        id={heThongRap?.maHeThongRap}
                                        role="tabpanel"
                                        aria-labelledby="v-pills-home-tab"
                                    >


                                        <div className="row">
                                            <div onClick={handleClick} active={active === 0} id={0} className="col-4 d-none  d-lg-block">
                                                {heThongRap.lstCumRap?.map((cumRap, index) => {
                                                    return (
                                                        // <div className="col-6" key={index.maCumRap}>
                                                        <div key={index.maCumRap}>
                                                            <h4 className="tabTheater__cumRap mb-2">{cumRap.tenCumRap}</h4>

                                                        </div>


                                                    );
                                                })}
                                            </div>
                                            <div className="col-8  col-sm-11 col-lg-8 text-center">
                                                <Content active={active === 0}>
                                                    {heThongRap.lstCumRap?.map((cumRap, index) => {
                                                        return <div>
                                                            {cumRap.danhSachPhim?.slice(0, 3).map((phim, index) => {
                                                                return <div className="tabTheater__listPhim">
                                                                    <img style={{ width: 250, height: 150 }} src={phim.hinhAnh} alt="" />
                                                                    <h4 className="text-info">{phim.tenPhim}</h4>
                                                                    <div className="row">
                                                                        {phim.lstLichChieuTheoPhim?.slice(0, 5).map((phimU, index) => {
                                                                            return <div className="col-6 col-sm-4 col-lg-4 col-xl-3 p-0">
                                                                                {/* <h5>{phimU.tenRap} - {phimU.giaVe}</h5> */}
                                                                                <span className="m-1 p-0">
                                                                                    {/* {moment(phimU.ngayChieuGioChieu).format(
                                                                                        "hh:mm A"
                                                                                    )} */}

                                                                                    <NavLink to={`/login`} className="btn btn-danger my-1  ">        {moment(phimU.ngayChieuGioChieu).format(
                                                                                        "hh:mm A"
                                                                                    )}</NavLink>
                                                                                </span>
                                                                            </div>
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            })}
                                                        </div>
                                                    })}
                                                </Content>
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

    );
}
