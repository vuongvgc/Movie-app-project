import axiosPure from "axios";
import {
  ADD_MOVIE_FAIL,
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_SUCCESS,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
} from "../constants/Admin";
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
export const addMovie = (form_data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_MOVIE_REQUEST,
    });
    axiosPure({
      url:
        "http://movie0706.cybersoft.edu.vn/api/quanlyphim/ThemPhimUploadHinh",
      method: "POST",
      data: form_data,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};
