import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAIL,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAIL,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAIL,
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAIL,
  RESET_STATUS,
} from "../constants/Admin";
import addItemInArr from "../utils/addItemInArr";
import deleteMovieInArr from "../utils/deleteMovieInArr";
const initialState = {
  moviesList: null,
  loading: true,
  error: null,
  currentUser: {
    loading: true,
    user: null,
    error: null,
  },
  addMovie: { success: false, error: null, loading: true },
  updateMovie: { success: false, error: null, loading: true },
  deleteMovie: { success: false, error: null, loading: true },
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
        addMovie: {
          ...state.addMovie,
          success: false,
          error: null,
          loading: false,
        },
      };
    }
    case ADD_MOVIE_SUCCESS: {
      let addItem = action.payload.data;
      let arrMovie = state.moviesList.items;
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          loading: false,
          error: null,
          currentUser: action.payload.data,
        },
        moviesList: {
          ...state.moviesList,
          items: addItemInArr(arrMovie, addItem),
        },
        addMovie: {
          ...state.addMovie,
          success: true,
          error: null,
          loading: true,
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
        addMovie: {
          ...state.addMovie,
          success: false,
          error: action.payload.error,
          loading: true,
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
    case UPDATE_MOVIE_REQUEST: {
      return {
        ...state,
        updateMovie: {
          ...state.updateMovie,
          success: false,
          error: null,
          loading: false,
        },
      };
    }
    case UPDATE_MOVIE_SUCCESS: {
      return {
        ...state,
        updateMovie: {
          ...state.updateMovie,
          success: true,
          error: null,
          loading: true,
        },
      };
    }
    case UPDATE_MOVIE_FAIL: {
      return {
        ...state,
        updateMovie: {
          ...state.updateMovie,
          success: false,
          error: action.payload.error,
          loading: true,
        },
      };
    }
    case DELETE_MOVIE_REQUEST: {
      return {
        ...state,
        deleteMovie: {
          ...state.deleteMovie,
          success: false,
          error: null,
          loading: false,
        },
      };
    }
    case DELETE_MOVIE_SUCCESS: {
      let movieModel = action.payload.movieModel;
      let arrMovie = state.moviesList.items;
      return {
        ...state,
        moviesList: {
          ...state.moviesList,
          items: deleteMovieInArr(arrMovie, movieModel),
        },
        deleteMovie: {
          ...state.deleteMovie,
          success: true,
          error: null,
          loading: true,
        },
      };
    }
    case DELETE_MOVIE_FAIL: {
      return {
        ...state,
        deleteMovie: {
          ...state.deleteMovie,
          success: false,
          error: action.payload.error,
          loading: true,
        },
      };
    }
    case RESET_STATUS: {
      return {
        ...state,
        addMovie: { success: false, error: null, loading: true },
        updateMovie: { success: false, error: null, loading: true },
        deleteMovie: { success: false, error: null, loading: true },
      };
    }
    default: {
      return { ...state };
    }
  }
};
export default adminMoviesReducers;
