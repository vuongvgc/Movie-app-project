import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
} from "../constants/Admin";
import axiosPure from "axios";
export const getMoviesList = (maNhom = "GP10", page = 1, pageSize = 5) => {
  return (dispatch) => {
    dispatch({
      type: GET_MOVIES_REQUEST,
    });
    axiosPure({
      method: "get",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${maNhom}&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`,
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
