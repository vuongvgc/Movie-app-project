import { GET_USER } from "../constants/user";
import axios from "../utils/axiosClient";

export const getUser = (user) => {
  return (dispatch) => {
    axios
      .post(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        user
      )
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
