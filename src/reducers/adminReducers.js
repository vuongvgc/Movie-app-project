import { addUser } from "../actions/Admin";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
} from "../constants/Admin";
const initialState = {
  userList: null,
  loading: true,
  error: null,
  addUser: { user: null, loading: true, error: null },
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
    case ADD_USER_REQUEST: {
      return { ...state, addUser: { ...addUser, loading: true, error: null } };
    }
    case ADD_USER_SUCCESS: {
      return {
        ...state,
        addUser: {
          ...addUser,
          loading: false,
          error: null,
          user: action.payload.data,
        },
      };
    }
    case ADD_USER_FAIL: {
      return {
        ...state,
        addUser: { ...addUser, loading: false, error: action.payload.error },
      };
    }
    default:
      return state;
  }
};

export default adminReducers;
