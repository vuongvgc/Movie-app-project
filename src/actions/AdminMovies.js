import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
} from "../constants/Admin";
import axios from "../utils/axiosClient";
export const getMoviesList = (maNhom = "GP01", page = 1, pageSize = 10) => {
  return (dispatch) => {
    dispatch({
      type: GET_MOVIES_REQUEST,
    });
    axios
      .get("/QuanLyPhim/LayDanhSachPhimPhanTrang", {
        params: {
          maNhom: maNhom,
          soTrang: page,
          soPhanTuTrenTrang: pageSize,
        },
      })
      .then((result) => {
        // Lưu thông tin user xuống localStorage
        dispatch({
          type: GET_MOVIES_SUCCESS,
          payload: { data: result.data },
        });
        // history.replace("/");
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: GET_MOVIES_FAIL,
          payload: { error: error.response },
        });
      });
  };
};
