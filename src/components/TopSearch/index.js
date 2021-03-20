import React, { useState, useEffect } from 'react'
import { qlPhimService } from '../../services/QuanLyPhimService'
import { NavLink } from 'react-router-dom';
import './style.css'

// var moment = require('moment'); // require

export default function TopSearch(props) {

    let [phim, setDanhSachPhim] = useState([]);
    let [phimSapChieu, setDanhSachPhimSapChieu] = useState([]);
    let [phimHot, setDanhSachPhimHot] = useState([]);
    const renderDanhSachPhim = () => {
        return phim.map((phim, index) => {
            return <div key={index} className="col-3 ">
                <div className="card text-left ">
                    <img style={{ width: '100%' }} className="card-img-top  img__topSearch " src={phim.hinhAnh} alt={phim.hinhAnh} />
                    <div className="card-body">
                        <h6 className="card-title">{phim.tenPhim}</h6>
                        <NavLink to={`/moviedetail/${phim.maPhim}`} className="btn btn-success">Đặt vé</NavLink>
                    </div>
                </div>

            </div>
        })
    }
    const renderDanhSachPhimSapChieu = () => {
        return phimSapChieu.map((phim, index) => {
            return <div key={index} className="col-3">
                <div className="card text-left ">
                    <img style={{ width: '100%' }} className="card-img-top img__topSearch " src={phim.hinhAnh} alt={phim.hinhAnh} />
                    <div className="card-body">
                        <h6 className="card-title">{phim.tenPhim}</h6>
                        <NavLink to={`/moviedetail/${phim.maPhim}`} className="btn btn-success">Đặt vé</NavLink>
                    </div>
                </div>

            </div>
        })
    }

    const renderDanhSachPhimHot = () => {
        return phimHot.map((phim, index) => {
            return <div key={index} className="col-3">
                <div className="card text-left ">
                    <img style={{ width: '100%' }} className="card-img-top img__topSearch" src={phim.hinhAnh} alt={phim.hinhAnh} />
                    <div className="card-body">
                        <h6 className="card-title">{phim.tenPhim}</h6>
                        <NavLink to={`/moviedetail/${phim.maPhim}`} className="btn btn-success">Đặt vé</NavLink>
                    </div>
                </div>

            </div>
        })
    }


    // useEffect(() => {
    //     qlPhimService.layDanhSachPhim().then(result => {
    //         console.log(result.data)
    //         setPhim(result.data)
    //     })
    // }, [])
    //useEffect thay thế cho 3 lifecycle (xem slide)
    useEffect(() => {
        qlPhimService.layDanhSachPhim().then(result => {
            console.log(result.data);
            setDanhSachPhim(result.data);
        }).catch(errors => {
            console.log(errors.response.data);
        })
    }, []); //Tham số 2 [] rổng sử dụng như componentdidmount

    useEffect(() => {
        qlPhimService.layDanhSachPhimSapChieu().then(result => {
            console.log(result.data);
            setDanhSachPhimSapChieu(result.data);
        }).catch(errors => {
            console.log(errors.response.data);
        })
    }, []); //Tham số 2 [] rổng sử dụng như componentdidmount
    useEffect(() => {
        qlPhimService.layDanhSachPhimHot().then(result => {
            console.log(result.data);
            setDanhSachPhimHot(result.data);
        }).catch(errors => {
            console.log(errors.response.data);
        })
    }, []); //Tham số 2 [] rổng sử dụng như componentdidmount

    return (
        <div>
            <div className='mt-5 container'>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Phim Đang Chiếu</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Phim Sắp Chiếu</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Phim Hot</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="container">
                            <div className="display-4"></div>
                            <div className="row">
                                {renderDanhSachPhim()}
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="container">
                            <div className="display-4"></div>
                            <div className="row">
                                {renderDanhSachPhimSapChieu()}
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="container">
                            <div className="display-4"></div>
                            <div className="row">
                                {renderDanhSachPhimHot()}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
