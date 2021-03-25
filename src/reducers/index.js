import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducers from "./authReducers";
import movieReducers from "./movieReducers";
import movieDetailReducer from "./movieDetailReducer";
import movieInfoReducer from "./movieInfoReducer";
import userReducers from "./userReducers";
import ticketRoomReducer from "./ticketRoom";
import adminReducers from "./adminReducers";

const rootReducers = combineReducers({
  authReducers,
  movieReducers,
  form: formReducer,
  movieDetailReducer,
  movieInfoReducer,
  ticketRoomReducer,
  userReducers,
  adminReducers,
});
export default rootReducers;
