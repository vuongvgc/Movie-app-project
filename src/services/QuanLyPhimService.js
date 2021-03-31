import axios from 'axios'
import { domain, groupID, userLogin } from '../config/setting';
export class QuanLyPhimService {


    layDanhSachPhim = () => {
        return axios({
            url: `${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
            method: 'GET'
        });
    }
    layThongTinPhim2 = () => {
        return axios({
            url: `${domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1323`,
            method: 'GET'
        });
    }

    layThongTinPhim = () => {
        return axios({
            url: `${domain}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP10`,
            method: 'GET'
        });
    }


    // layThongTinPhim = () => {
    //     return axios({
    //         url: `${domain}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${groupID}`,
    //         method: 'GET'
    //     });
    // }

    layThongTinPhongVe = (maLichChieu) => {
        return axios({
            url: `${domain}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
            method: 'GET'
        })
    }


    layDanhSachPhimSapChieu = () => {
        return axios({
            url: `${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=GP11`,
            method: 'GET'
        });
    }
    layDanhSachPhimHot = () => {
        return axios({
            url: `${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`,
            method: 'GET'
        });
    }

    layThongTinPhongVe = () => {
        return axios({
            url: `http://svcy2.myclass.vn/api//QuanLyHeThongRap/LayThongTinHeThongRap`,
            method: 'GET'
        });
    }

    // /QuanLyRap/LayThongTinHeThongRap
}



export const qlPhimService = new QuanLyPhimService();
