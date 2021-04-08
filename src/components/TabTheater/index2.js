import React, { useState, useEffect } from "react";
import { qlPhimService } from "../../services/QuanLyPhimService";
import { NavLink } from "react-router-dom";
import "./style.css";
import Image from "../../../src/assets/image/background/bgContact.jpg";
// component loading
// import { render } from "react-dom";
// import { Tab, Tabs } from "react-tabify";

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
    <div className="container m-5">
      <h4>THÔNG TIN LỊCH CHIẾU</h4>
    </div>
  );
}
