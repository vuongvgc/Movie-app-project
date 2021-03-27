import { TICKET_ROOM_FAIL, TICKET_ROOM_SUCCESS, TICKET_ROOM_REQUEST } from "../constants/TicketRoom";


const initialState = {
    ticketRoom : {},
    loading: false,
    error: null
}


const ticketRoomReducer =  (state  =initialState,action )=>{
    switch (action.type) {
        case TICKET_ROOM_REQUEST: {
            return { ...state, loading: true, error: null };
        }

        case TICKET_ROOM_SUCCESS: {

            return { ...state, ticketRoom: action.payload.data, loading: false, error: null }
        }

        case TICKET_ROOM_FAIL: {

            return { ...state, loading: false, error: action.payload.error }
        }


        default:
            return state;
    }
}

export default ticketRoomReducer;