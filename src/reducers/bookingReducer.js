import { BOOKING_FAIL, BOOKING_SUCCESS, BOOKING_REQUEST } from "../constants/Booking";


const initialState = {
    booking: "",
    loading: false,
    error: null
}


const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKING_REQUEST: {
            return { ...state, loading: true, error: null };
        }

        case BOOKING_SUCCESS: {

            return { ...state, booking: action.payload.data, loading: false, error: null }
        }

        case BOOKING_FAIL: {

            return { ...state, loading: false, error: action.payload.error }
        }


        default:
            return state;
    }
}

export default bookingReducer;