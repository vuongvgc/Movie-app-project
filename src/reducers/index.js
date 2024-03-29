import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducers from "./authReducers";
import movieReducers from "./movieReducers";
import movieDetailReducer from "./movieDetailReducer";
import movieInfoReducer from "./movieInfoReducer";
import userReducers from "./userReducers";
import ticketRoomReducer from "./ticketRoomReducer";
import bookingReducer from "./bookingReducer";
import adminReducers from "./adminReducers";
import adminMoviesReducers from "./adminMoviesReducers";
import adminShowtimeReducers from "./adminShowtimeReducers.js";

const rootReducers = combineReducers({
  authReducers,
  movieReducers,
  form: formReducer,
  movieDetailReducer,
  movieInfoReducer,
  ticketRoomReducer,
  userReducers,
  bookingReducer,
  adminReducers,
  adminMovies: adminMoviesReducers,
  adminShowtime: adminShowtimeReducers,
});
export default rootReducers;
