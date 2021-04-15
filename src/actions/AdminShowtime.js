import axiosPure from "axios";
import {
  MOVIE_THEATER_SYSTEM_REQUEST,
  MOVIE_THEATER_SYSTEM_SUCCESS,
  MOVIE_THEATER_SYSTEM_FAIL,
  MOVIE_THEATER_ZONE_REQUEST,
  MOVIE_THEATER_ZONE_SUCCESS,
  MOVIE_THEATER_ZONE_FAIL,
} from "../constants/Admin";
export const getMovieTheaterSystemList = () => {
  return (dispatch) => {
    dispatch({
      type: MOVIE_THEATER_SYSTEM_REQUEST,
    });
    axiosPure({
      method: "get",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
    })
      .then((result) => {
        dispatch({
          type: MOVIE_THEATER_SYSTEM_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: MOVIE_THEATER_SYSTEM_FAIL,
          payload: { error: error.response },
        });
      });
  };
};
export const getMovieTheaterZoneList = (movieTheater) => {
  return (dispatch) => {
    dispatch({
      type: MOVIE_THEATER_ZONE_REQUEST,
    });
    axiosPure({
      method: "get",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${movieTheater}`,
    })
      .then((result) => {
        dispatch({
          type: MOVIE_THEATER_ZONE_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        // console.log(error.response);
        dispatch({
          type: MOVIE_THEATER_ZONE_FAIL,
          payload: { error: error?.response?.data },
        });
      });
  };
};
