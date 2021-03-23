import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducers from "./authReducers";
import movieReducers from "./movieReducers";
import movieDetailReducer from "./movieDetailReducer";
import movieInfoReducer from "./movieInfoReducer";
import ticketRoomReducer from "./ticketRoom";

const rootReducers = combineReducers({
  authReducers,
  movieReducers,
  form: formReducer,
  movieDetailReducer,
  movieInfoReducer,
  ticketRoomReducer
});
export default rootReducers;
