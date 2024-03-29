import axiosPure from "axios";
import {
  ADD_MOVIE_FAIL,
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_SUCCESS,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAIL,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAIL,
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAIL,
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
        // console.log(error.response);
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
        "https://movie0706.cybersoft.edu.vn/api/quanlyphim/ThemPhimUploadHinh",
      method: "POST",
      data: form_data,
    })
      .then((result) => {
        dispatch({
          type: ADD_MOVIE_SUCCESS,
          payload: { data: result.data, movieForm: form_data },
        });
      })
      .catch((error) => {
        // console.log(error.response);
        dispatch({
          type: ADD_MOVIE_FAIL,
          payload: { error: error?.response?.data },
        });
      });
  };
};
export const updateMovie = (form_data, accessToken) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_MOVIE_REQUEST,
    });
    axiosPure({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
      method: "POST",
      data: form_data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch({
          type: UPDATE_MOVIE_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_MOVIE_FAIL,
          payload: { error: "Cập nhật thất bại" },
        });
      });
  };
};
export const deleteMovie = (maPhim, accessToken) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_MOVIE_REQUEST,
    });
    axiosPure({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch({
          type: DELETE_MOVIE_SUCCESS,
          payload: { data: result.data, movieModel: maPhim },
        });
      })
      .catch((error) => {
        // console.log(error.response);
        dispatch({
          type: DELETE_MOVIE_FAIL,
          payload: { error: error?.response?.data },
        });
      });
  };
};
export const searchMoviesList = (
  maNhom = "GP10",
  tenPhim,
  page = 1,
  pageSize = 5
) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_MOVIE_REQUEST,
    });
    axiosPure({
      method: "get",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${maNhom}&tenPhim=${tenPhim}&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`,
    })
      .then((result) => {
        // Lưu thông tin user xuống localStorage
        dispatch({
          type: SEARCH_MOVIE_SUCCESS,
          payload: { data: result.data },
        });
        // history.replace("/");
      })
      .catch((error) => {
        // console.log(error.response);
        dispatch({
          type: SEARCH_MOVIE_FAIL,
          payload: { error: error.response },
        });
      });
  };
};
