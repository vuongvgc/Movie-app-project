// Auth Reducer: Phục vụ cho đăng nhập, đăng ký, lưu trữ thông tin user đăng nhập
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "../constants/auth";

const currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  currentUser: currentUser,
  loading: false,
  error: null,
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
    default:
      return state;
  }
};

export default authReducer;
