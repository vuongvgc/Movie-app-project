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
  UPDATE_ADMIN_USER_REQUEST,
  UPDATE_ADMIN_USER_SUCCESS,
  UPDATE_ADMIN_USER_FAIL,
  RESET_STATUS,
} from "../constants/Admin";
import axios from "../utils/axiosClient";
import axiosPure from "axios";
export const getUserList = (
  maNhom = "GP02",
  tuKhoa,
  page = 1,
  pageSize = 5
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
        dispatch({
          type: GET_USER_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: GET_USER_FAIL,
          payload: { error: error.response },
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
        dispatch({
          type: ADD_USER_SUCCESS,
          payload: { data: result.data, user: { ...formValue } },
        });
        // history.replace("/");
      })
      .catch((error) => {
        dispatch({
          type: ADD_USER_FAIL,
          payload: { error: error?.response?.data },
        });
      });
  };
};
export const deleteUser = (taiKhoan, accessToken) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_USER_REQUEST,
    });
    axiosPure({
      method: "delete",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${taiKhoan}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch({
          type: DELETE_USER_SUCCESS,
          payload: { data: result.data, user: taiKhoan },
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: DELETE_USER_FAIL,
          payload: { error: error?.response?.data },
        });
      });
  };
};
export const updateAdminUser = (formValue, accessToken) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_ADMIN_USER_REQUEST,
    });
    axios
      .put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", formValue, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((result) => {
        dispatch({
          type: UPDATE_ADMIN_USER_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: UPDATE_ADMIN_USER_FAIL,
          payload: { error: error?.response?.data },
        });
      });
  };
};
export const resetStatus = () => {
  return {
    type: RESET_STATUS,
  };
};
