import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../constants/auth";
import axios from "../utils/axiosClient";
import { createBrowserHistory } from "history";
let history = createBrowserHistory();
export const login = (values) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    axios
      .post("/QuanLyNguoiDung/DangNhap", { ...values })
      .then((result) => {
        // Lưu thông tin user xuống localStorage
        localStorage.setItem("user", JSON.stringify(result.data));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            data: result.data,
          },
        });
        history.replace("/");
      })
      .catch((error) => {
        // console.log(error.response.data);
        dispatch({
          type: LOGIN_FAIL,
          payload: {
            error: error.response.data,
          },
        });
      });
  };
};
export const logout = () => {
  localStorage.removeItem("user");
  return { type: LOGOUT_SUCCESS };
};
export const register = (values) => {
  const admin = {
    maNhom: "GP10",
    maLoaiNguoiDung: "KhachHang",
  };
  return (dispatch) => {
    dispatch({
      type: REGISTER_REQUEST,
    });
    axios
      .post("/QuanLyNguoiDung/DangKy", { ...values, ...admin })
      .then((result) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: {
            data: result.data,
          },
        });
        history.replace("/");
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_FAIL,
          payload: {
            error: error.response.data,
          },
        });
      });
  };
};
//   "maNhom": "GP10",
//   "maLoaiNguoiDung": "string",
