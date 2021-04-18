import React, { useState, useEffect, useRef } from 'react'
import { qlPhimService } from '../../services/QuanLyPhimService'
import { NavLink } from 'react-router-dom';
import './style.css'
// Slick Slider
import Slider from "react-slick";




// var moment = require('moment'); // require

export default function TopSearch(props) {


    const settings = {
        centerMode: false,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 4,
        speed: 400,
        rows: 1,
        slidesPerRow: 1,
        slidesToScroll: 4,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
        // autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1198,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1
                }
            }
        ]
    };



    let [phim, setDanhSachPhim] = useState([]);
    let [phimSapChieu, setDanhSachPhimSapChieu] = useState([]);
    let [phimHot, setDanhSachPhimHot] = useState([]);
    const renderDanhSachPhim = () => {
        return phim.map((phim, index) => {
            return <div key={index} className="col-3 my-2 ">

                <div className="card text-left top__Search ">
                    <div className="top__Search__overlay"></div>
                    <div className="top__Search__play">
                        <a className="" data-fancybox href={phim.trailer}>
                            <i className="fa fa-play" />
                        </a>
                        <p className="topSearch__book" >
                            <NavLink style={{ fontSize: "1.5rem" }} to={`/movie/${phim.maPhim}`} className="btn btn-secondary p-3 ">ĐẶT VÉ</NavLink>
                        </p>

                    </div>

                    <img style={{ width: '100%' }} className="card-img-top  img__topSearch img-fluid " src={phim.hinhAnh} alt={phim.hinhAnh} />
                    <div className="card-body">
                        <h5 className="card-title top__Search__title text-center">{phim.tenPhim}</h5>
                    </div>
                </div>
            </div>
        })
    }
    const renderDanhSachPhimSapChieu = () => {
        return phimSapChieu.map((phim, index) => {
            return <div key={index} className="col-3 my-2">
                <div className="card text-left top__Search ">
                    <div className="top__Search__overlay"></div>
                    <div className="top__Search__play">
                        <a className="" data-fancybox href={phim.trailer}>
                            <i className="fa fa-play" />
                        </a>
                        <p className="topSearch__book" >
                            <NavLink style={{ fontSize: "1.5rem" }} to={`/movie/${phim.maPhim}`} className="btn btn-secondary p-3">ĐẶT VÉ</NavLink>
                        </p>

                    </div>

                    <img style={{ width: '100%' }} className="card-img-top  img__topSearch img-fluid " src={phim.hinhAnh} alt={phim.hinhAnh} />
                    <div className="card-body">
                        <h5 className="text-center card-title top__Search__title">{phim.tenPhim}</h5>
                    </div>
                </div>

            </div>
        })
    }

    const renderDanhSachPhimHot = () => {
        return phimHot.map((phim, index) => {
            return <div key={index} className="col-3 my-2" >
                <div className="card text-left top__Search ">
                    <div className="top__Search__overlay"></div>
                    <div className="top__Search__play">
                        <a className="" data-fancybox href={phim.trailer}>
                            <i className="fa fa-play" />
                        </a>
                        <p className="topSearch__book">
                            <NavLink style={{ fontSize: "1.5rem" }} to={`/movie/${phim.maPhim}`} className="btn btn-secondary p-3 ">ĐẶT VÉ</NavLink>
                        </p>

                    </div>

                    <img style={{ width: '100%' }} className="card-img-top  img__topSearch img-fluid " src={phim.hinhAnh} alt={phim.hinhAnh} />
                    <div className="card-body">
                        <h5 className="text-center card-title top__Search__title">{phim.tenPhim}</h5>
                    </div>
                </div>

            </div>
        })
    }
    const renderDanhSachPhimHot2 = () => {
        return phimHot.map((phim, index) => {
            return <div key={index} className="col-3">
                <div className="card text-left ">
                    <img style={{ width: '100%' }} className="card-img-top img__topSearch img-fluid" src={phim.hinhAnh} alt={phim.hinhAnh} />
                    <div className="card-body">
                        <h6 className="card-title">{phim.tenPhim}</h6>
                        <NavLink to={`/movie/${phim.maPhim}`} className="btn btn-secondary">Đặt vé</NavLink>
                    </div>
                </div>

            </div>
        })
    }


    //useEffect thay thế cho 3 lifecycle (xem slide)
    useEffect(() => {
        qlPhimService.layDanhSachPhim().then(result => {
            // console.log(result.data);
            setDanhSachPhim(result.data);
        }).catch(errors => {
            // console.log(errors.response.data);
        })
    }, []); //Tham số 2 [] rổng sử dụng như componentdidmount

    useEffect(() => {
        qlPhimService.layDanhSachPhimSapChieu().then(result => {
            // console.log(result.data);
            setDanhSachPhimSapChieu(result.data);
        }).catch(errors => {
            // console.log(errors.response.data);
        })
    }, []); //Tham số 2 [] rổng sử dụng như componentdidmount
    useEffect(() => {
        qlPhimService.layDanhSachPhimHot().then(result => {
            // console.log(result.data);
            setDanhSachPhimHot(result.data);
        }).catch(errors => {
            // console.log(errors.response.data);
        })
    }, []); //Tham số 2 [] rổng sử dụng như componentdidmount



    return (
        <div>
            <div className='mt-5 container '>
                <ul className="nav nav-pills mb-3  " id="pills-tab" role="tablist">
                    <li className="nav-item my-2" role="presentation">
                        <button className="nav-link  top__Search__link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Phim Đang Chiếu</button>
                    </li>
                    <li className="nav-item  my-2" role="presentation">
                        <button className="nav-link top__Search__link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Phim Sắp Chiếu</button>
                    </li>
                    <li className="nav-item my-2 " role="presentation">
                        <button className="nav-link top__Search__link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Phim Hot</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="container">

                            {/* <div className="display-4"></div>
                            <div className="row">
                                {renderDanhSachPhim()}
                            </div> */}
                            {/* {renderDanhSachPhim()} */}
                            <Slider {...settings}>
                                {/* {renderDanhSachPhimHot()} */}
                                {/* {renderDanhSachPhimSapChieu()} */}
                                {renderDanhSachPhim()}


                            </Slider>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="container">
                            {/* <div className="display-4"></div>
                            <div className="row">
                                {renderDanhSachPhimSapChieu()}

                            </div> */}
                            <Slider {...settings}>
                                {/* {renderDanhSachPhimHot()} */}
                                {renderDanhSachPhimSapChieu()}

                            </Slider>


                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="container">
                            <Slider {...settings}>
                                {renderDanhSachPhimHot()}
                            </Slider>
                            {/* <div className="display-4"></div>
                            <div className="row">
                                {renderDanhSachPhimHot()}
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
