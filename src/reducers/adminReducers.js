import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "../constants/Admin";
const initialState = {
  userList: {},
  loading: false,
  error: null,
};

const adminReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        userList: action.payload.data,
        loading: false,
      };
    }
    case GET_USER_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    default:
      return state;
  }
};

export default adminReducers;
