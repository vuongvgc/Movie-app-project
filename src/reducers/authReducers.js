// Auth Reducer: Phục vụ cho đăng nhập, đăng ký, lưu trữ thông tin user đăng nhập
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../constants/auth";

const currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  currentUser: currentUser,
  loading: false,
  error: null,
  registerUser: "",
  registerStatus: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload.data,
        loading: false,
      };
    }
    case LOGIN_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case LOGOUT_SUCCESS: {
      return { ...initialState };
    }
    case REGISTER_SUCCESS: {
      return { ...state, registerUser: action.payload.data };
    }
    case REGISTER_FAIL: {
      return { ...state, registerStatus: action.payload.error };
    }
    default:
      return state;
  }
};

export default authReducer;
