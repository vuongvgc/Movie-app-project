import { TICKET_ROOM_FAIL, TICKET_ROOM_SUCCESS, TICKET_ROOM_REQUEST } from "../constants/TicketRoom";


const initialState = {
    ticketRoom : {},
    loadingTicketRoom: false,
    error: null
}


const ticketRoomReducer =  (state  =initialState,action )=>{
    switch (action.type) {
        case TICKET_ROOM_REQUEST: {
            return { ...state, loadingTicketRoom: true, error: null };
        }

        case TICKET_ROOM_SUCCESS: {

            return { ...state, ticketRoom: action.payload.data, loadingTicketRoom: false, error: null }
        }

        case TICKET_ROOM_FAIL: {

            return { ...state, loadingTicketRoom: false, error: action.payload.error }
        }


        default:
            return state;
    }
}

export default ticketRoomReducer;