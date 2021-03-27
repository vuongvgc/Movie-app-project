import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducers from "./authReducers";
import movieReducers from "./movieReducers";
import movieDetailReducer from "./movieDetailReducer";
import movieInfoReducer from "./movieInfoReducer";
import userReducers from "./userReducers";
import ticketRoomReducer from "./ticketRoomReducer";
import bookingRudecer from "./bookingRudecer"

const rootReducers = combineReducers({
  authReducers,
  movieReducers,
  form: formReducer,
  movieDetailReducer,
  movieInfoReducer,
  ticketRoomReducer,
  userReducers,
  bookingRudecer,
});
export default rootReducers;
