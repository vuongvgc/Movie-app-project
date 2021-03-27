import { MOVIE_DETAIL_FAIL, MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS } from "../constants/MovieDetail";

const initialState = {
    movieDetails: {},
    loading: false,
    error: null
}

const movieDetailReducer =  (state  =initialState,action )=>{
    switch (action.type) {
        case MOVIE_DETAIL_REQUEST: {
            return { ...state, loading: true, error: null };
        }

        case MOVIE_DETAIL_SUCCESS: {

            return { ...state, movieDetails: action.payload.data, loading: false, error: null }
        }

        case MOVIE_DETAIL_FAIL: {


            return { ...state, loading: false, error: action.payload.error }
        }


        default:
            return state;
    }
}

export default movieDetailReducer;