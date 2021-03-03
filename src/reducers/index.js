import { combineReducers } from "redux";
import authReducers from "./authReducers";
import movieReducers from "./movieReducers";
const rootReducers = combineReducers({
  authReducers,
  movieReducers,
});
export default rootReducers;
