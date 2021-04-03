import { BOOKING_FAIL, BOOKING_REQUEST, BOOKING_SUCCESS } from "../constants/Booking";
import axios from "../utils/axiosClient";

const user = localStorage.getItem('user')


const { accessToken } = JSON.parse(user)

export const getBooking = (value) => {
    return (dispatch) => {
        dispatch({ type: BOOKING_REQUEST });
        axios.post(
            `QuanLyDatVe/DatVe`, value, {
            headers: {
                Authorization:`Bearer ${accessToken}`
            }
        }
        )
            .then((result) => {
                dispatch({
                    type: BOOKING_SUCCESS,
                    payload: { data: result.data }
                })
            }
            )

            .catch((error) => {
                dispatch({
                    type: BOOKING_FAIL,
                    payload: { error: error?.reponse?.data }
                })
            })
    }

}