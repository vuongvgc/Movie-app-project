import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "../constants/Admin";
import axios from "../utils/axiosClient";
export const getUserList = (
  maNhom = "GP01",
  tuKhoa,
  page = 1,
  pageSize = 10
) => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_REQUEST,
    });
    axios
      .get("/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang", {
        params: {
          MaNhom: maNhom,
          tuKhoa: tuKhoa,
          soTrang: page,
          soPhanTuTrenTrang: pageSize,
        },
      })
      .then((result) => {
        // Lưu thông tin user xuống localStorage
        dispatch({
          type: GET_USER_SUCCESS,
          payload: { data: result.data },
        });
        // history.replace("/");
      })
      .catch((error) => {
        // console.log(error.response.data);
        dispatch({
          type: GET_USER_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};
