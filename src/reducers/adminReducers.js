import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "../constants/Admin";
const initialState = {
  userList: null,
  loading: true,
  error: null,
  addUser: { user: null, loading: true, isSuccess: false, error: null },
  deleteUser: { user: null, loading: true, isSuccess: false, error: null },
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
      return {
        ...state,
        addUser: { ...state.addUser, loading: true, error: null },
      };
    }
    case ADD_USER_SUCCESS: {
      return {
        ...state,
        addUser: {
          ...state.addUser,
          loading: false,
          isSuccess: true,
          error: null,
          user: action.payload.data,
        },
      };
    }
    case ADD_USER_FAIL: {
      return {
        ...state,
        addUser: {
          ...state.addUser,
          loading: false,
          error: action.payload.error,
        },
      };
    }
    case DELETE_USER_REQUEST: {
      return {
        ...state,
        deleteUser: { ...state.deleteUser, loading: true, error: null },
      };
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        deleteUser: {
          ...state.deleteUser,
          loading: false,
          isSuccess: true,
          error: null,
          user: action.payload.data,
        },
      };
    }
    case DELETE_USER_FAIL: {
      return {
        ...state,
        deleteUser: {
          ...state.deleteUser,
          loading: false,
          error: action.payload.error,
        },
      };
    }
    default:
      return state;
  }
};

export default adminReducers;
