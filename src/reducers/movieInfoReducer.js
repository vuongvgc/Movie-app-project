import { MOVIE_INFO_FAIL, MOVIE_INFO_REQUEST, MOVIE_INFO_SUCCESS } from "../constants/MovieInfo";

const initialState = {
    movieInfo: {},
    loading: false,
    error: null
}


const movieInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_INFO_REQUEST: {
            return { ...state, loading: true, error: null };
        }

        case MOVIE_INFO_SUCCESS: {

            return { ...state, movieInfo: action.payload.data, loading: false, error: null }
        }

        case MOVIE_INFO_FAIL: {

            return { ...state, loading: false, error: action.payload.error }
        }


        default:
            return state;
    }
}

export default movieInfoReducer;