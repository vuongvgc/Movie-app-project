import { MOVIE_INFO_FAIL, MOVIE_INFO_REQUEST, MOVIE_INFO_SUCCESS } from "../constants/MovieInfo";
import axios from "../utils/axiosClient";

export const getMovieInfo = (id) => {
    return (dispatch) => {
        dispatch({ type: MOVIE_INFO_REQUEST });

        axios.get(
            `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
        )
            .then((result) => {
                dispatch({
                    type: MOVIE_INFO_SUCCESS,
                    payload: { data: result.data }
                })
            }
            )

            .catch((error) => {
                dispatch({
                    type: MOVIE_INFO_FAIL,
                    payload: { error: error?.reponse?.data }
                })
            })
    }
}