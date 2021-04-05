import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAIL,
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAIL,
} from "../constants/Admin";
const initialState = {
  moviesList: null,
  loading: true,
  error: null,
  currentUser: {
    loading: true,
    user: null,
    error: null,
  },
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
    case ADD_MOVIE_REQUEST: {
      return {
        ...state,
        currentUser: { ...state.currentUser, loading: true, error: null },
      };
    }
    case ADD_MOVIE_SUCCESS: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          loading: false,
          error: null,
          currentUser: action.payload.data,
        },
      };
    }
    case ADD_MOVIE_FAIL: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          loading: false,
          error: action.payload.error,
        },
      };
    }
    case SEARCH_MOVIE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case SEARCH_MOVIE_SUCCESS: {
      return {
        ...state,
        moviesList: action.payload.data,
        loading: false,
        error: null,
      };
    }
    case SEARCH_MOVIE_FAIL: {
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
