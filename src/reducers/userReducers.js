// Auth Reducer: Phục vụ cho đăng nhập, đăng ký, lưu trữ thông tin user đăng nhập
import {
  GET_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_FAIL,
} from "../constants/user";
import { LOGOUT_SUCCESS } from "../constants/auth";

const initialState = {
  userDetail: null,
  updateUser: { loading: true, error: null, success: false },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return { ...state, userDetail: action.payload.data };
    }
    case LOGOUT_SUCCESS: {
      return { ...initialState };
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        updateUser: { loading: true, error: null, success: false },
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        userDetail: {
          ...action.payload.data,
          thongTinDatVe: state.userDetail.thongTinDatVe,
        },
        updateUser: { loading: false, error: null, success: true },
        loading: false,
      };
    }
    case UPDATE_USER_FAIL: {
      return {
        ...state,
        updateUser: {
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

export default userReducer;
