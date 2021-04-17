import {
  MOVIE_THEATER_SYSTEM_REQUEST,
  MOVIE_THEATER_SYSTEM_SUCCESS,
  MOVIE_THEATER_SYSTEM_FAIL,
  MOVIE_THEATER_ZONE_REQUEST,
  MOVIE_THEATER_ZONE_SUCCESS,
  MOVIE_THEATER_ZONE_FAIL,
} from "../constants/Admin";
const initialState = {
  movieTheaterSystem: {
    theaterSystemList: [],
    loading: true,
    error: null,
    success: false,
  },
  movieTheaterZone: {
    theaterZoneList: [],
    loading: true,
    error: null,
    success: false,
  },
};

const adminShowtimeReducers = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_THEATER_SYSTEM_REQUEST: {
      return {
        ...state,
        movieTheaterSystem: {
          ...state.movieTheaterSystem,
          loading: true,
          error: null,
          success: false,
        },
      };
    }
    case MOVIE_THEATER_SYSTEM_SUCCESS: {
      return {
        ...state,
        movieTheaterSystem: {
          theaterSystemList: action.payload.data,
          loading: false,
          error: null,
          success: true,
        },
      };
    }
    case MOVIE_THEATER_SYSTEM_FAIL: {
      return {
        ...state,
        movieTheaterSystem: {
          ...state.movieTheaterSystem,
          loading: true,
          error: action.payload.error,
          success: false,
        },
      };
    }
    case MOVIE_THEATER_ZONE_REQUEST: {
      return {
        ...state,
        movieTheaterZone: {
          ...state.movieTheaterZone,
          loading: true,
          error: null,
          success: false,
        },
      };
    }
    case MOVIE_THEATER_ZONE_SUCCESS: {
      return {
        ...state,
        movieTheaterZone: {
          theaterZoneList: action.payload.data,
          loading: false,
          error: null,
          success: true,
        },
      };
    }
    case MOVIE_THEATER_ZONE_FAIL: {
      return {
        ...state,
        movieTheaterZone: {
          ...state.movieTheaterZone,
          loading: true,
          error: action.payload.error,
          success: false,
        },
      };
    }
    default:
      return state;
  }
};

export default adminShowtimeReducers;
