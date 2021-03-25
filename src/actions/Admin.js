import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "../constants/Admin";
import axios from "../utils/axiosClient";
import { createBrowserHistory } from "history";
let history = createBrowserHistory();
export const getUserList = (maNhom, tuKhoa, page, pageSize) => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_REQUEST,
    });

    axios
      .get("/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang", {
        params: {
          MaNhom: "GP01",
          tuKhoa: "v",
          soTrang: 1,
          soPhanTuTrenTrang: 20,
        },
      })
      .then((result) => {
        // Lưu thông tin user xuống localStorage
        localStorage.setItem("user", JSON.stringify(result.data));
        dispatch({
          type: GET_USER_SUCCESS,
          payload: {
            data: result.data,
          },
        });
        history.replace("/");
      })
      .catch((error) => {
        // console.log(error.response.data);
        dispatch({
          type: GET_USER_FAIL,
          payload: {
            error: error.response.data,
          },
        });
      });
  };
};
