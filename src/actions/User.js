import {
  GET_USER,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
} from "../constants/user";
import axios from "../utils/axiosClient";

export const getUser = (user) => {
  return (dispatch) => {
    axios
      .post("/QuanLyNguoiDung/ThongTinTaiKhoan", user)
      .then((result) => {
        dispatch({
          type: GET_USER,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
};
export const updateUser = (formValue, accessToken) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });
    axios
      .put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", formValue, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((result) => {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: UPDATE_USER_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};
