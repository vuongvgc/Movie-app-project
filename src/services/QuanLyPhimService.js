import axios from "axios";
import { domain, groupID, userLogin } from "../config/setting";
export class QuanLyPhimService {
  layDanhSachPhim = () => {
    return axios({
      url: `${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
      method: "GET",
    });
  };
  layThongTinPhim2 = () => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1323`,
      method: "GET",
    });
  };

  layThongTinPhim = () => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP10`,
      method: "GET",
    });
  };

  layDanhSachPhimSapChieu = () => {
    return axios({
      url: `${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=GP11`,
      method: "GET",
    });
  };
  layDanhSachPhimHot = () => {
    return axios({
      url: `${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`,
      method: "GET",
    });
  };

  layThongTinPhongVeCGV = () => {
    return axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=CGV&maNhom=GP04`,
      method: "GET",
    });
  };

  layThongTinPhongVeCineStar = () => {
    return axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=CineStar&maNhom=GP09`,
      method: "GET",
    });
  };

  layThongTinPhongVeGalaxy = () => {
    return axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=Galaxy&maNhom=GP10`,
      method: "GET",
    });
  };

  layThongTinPhongVeLotteCinema = () => {
    return axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=LotteCinima&maNhom=GP11`,
      method: "GET",
    });
  };

  layThongTinPhongVeMegaGS = () => {
    return axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=MegaGS&maNhom=GP11`,
      method: "GET",
    });
  };

  layThongTinPhongVeCineStar2 = () => {
    return axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=CineStar&maNhom=GP11`,
      method: "GET",
    });
  };

  // /QuanLyRap/LayThongTinHeThongRap
}

export const qlPhimService = new QuanLyPhimService();
