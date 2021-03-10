import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducers from "./authReducers";
import movieReducers from "./movieReducers";
const rootReducers = combineReducers({
  authReducers,
  movieReducers,
  form: formReducer,
});
export default rootReducers;
