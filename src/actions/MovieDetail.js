import axios from "../utils/axiosClient";
import { MOVIE_DETAIL_FAIL, MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS } from '../constants/MovieDetail';

export const getMovieDetail = (id) => {
    return (dispatch) => {
        dispatch({ type: MOVIE_DETAIL_REQUEST });

        axios.get(
            `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
        )
            .then((result) => {
                dispatch({
                    type: MOVIE_DETAIL_SUCCESS,
                    payload: { data: result.data }
                })
            }
            )

            .catch((error) => {
                dispatch({
                    type: MOVIE_DETAIL_FAIL,
                    payload: { error: error.reponse.data }
                })
            })
    }
}