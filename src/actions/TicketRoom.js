import { TICKET_ROOM_FAIL, TICKET_ROOM_REQUEST, TICKET_ROOM_SUCCESS } from "../constants/TicketRoom";
import axios from "../utils/axiosClient";


export const getTicketRoom = (id) => {
    return (dispatch) => {
        dispatch({ type: TICKET_ROOM_REQUEST});

        axios.get(
            `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
        )
            .then((result) => {
                dispatch({
                    type: TICKET_ROOM_SUCCESS,
                    payload: { data: result.data }
                })
            }
            )

            .catch((error) => {
                dispatch({
                    type: TICKET_ROOM_FAIL,
                    payload: { error: error?.response?.data }
                })
            })
    }
}
