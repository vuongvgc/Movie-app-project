import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducers from "./authReducers";
import movieReducers from "./movieReducers";
import userReducers from "./userReducers";
const rootReducers = combineReducers({
  authReducers,
  movieReducers,
  form: formReducer,
  userReducers,
});
export default rootReducers;
