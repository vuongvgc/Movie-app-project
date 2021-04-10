import { TICKET_ROOM_FAIL, TICKET_ROOM_SUCCESS, TICKET_ROOM_REQUEST } from "../constants/TicketRoom";


const initialState = {
    ticketRoom : {},
    loadingTicketRoom: false,
    errorTicketRoom: null
}


const ticketRoomReducer =  (state  =initialState,action )=>{

    switch (action.type) {
        case TICKET_ROOM_REQUEST: {
            return { ...state, loadingTicketRoom: true, errorTicketRoom: null };
        }

        case TICKET_ROOM_SUCCESS: {

            return { ...state, ticketRoom: action.payload.data, loadingTicketRoom: false, errorTicketRoom: null }
        }

        case TICKET_ROOM_FAIL: {

            return { ...state, loadingTicketRoom: false, errorTicketRoom: action.payload.error }
        }


        default:
            return state;
    }
}

export default ticketRoomReducer;