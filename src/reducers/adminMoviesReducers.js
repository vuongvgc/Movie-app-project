import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
} from "../constants/Admin";
const initialState = {
  moviesList: null,
  loading: true,
  error: null,
};
const adminMoviesReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case GET_MOVIES_SUCCESS: {
      return {
        ...state,
        moviesList: action.payload.data,
        loading: false,
        error: null,
      };
    }
    case GET_MOVIES_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default: {
      return { ...state };
    }
  }
};
export default adminMoviesReducers;
