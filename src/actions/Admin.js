import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
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
export const addUser = (formValue, accessToken) => {
  return (dispatch) => {
    dispatch({
      type: ADD_USER_REQUEST,
    });
    axios
      .post("/QuanLyNguoiDung/ThemNguoiDung", formValue, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((result) => {
        // Lưu thông tin user xuống localStorage
        dispatch({
          type: ADD_USER_SUCCESS,
          payload: { data: result.data },
        });
        // history.replace("/");
      })
      .catch((error) => {
        // console.log(error.response.data);
        dispatch({
          type: ADD_USER_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};
export const deleteUser = (taiKhoan, accessToken) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_USER_REQUEST,
    });
    axios
      .delete("/QuanLyNguoiDung/XoaNguoiDung", taiKhoan, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((result) => {
        dispatch({
          type: DELETE_USER_SUCCESS,
          payload: { data: result.data },
        });
        // history.replace("/");
      })
      .catch((error) => {
        // console.log(error.response.data);
        dispatch({
          type: DELETE_USER_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};
