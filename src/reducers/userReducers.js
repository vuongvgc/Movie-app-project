// Auth Reducer: Phục vụ cho đăng nhập, đăng ký, lưu trữ thông tin user đăng nhập
import { GET_USER } from "../constants/user";
import { LOGOUT_SUCCESS } from "../constants/auth";
const initialState = {
  userDetail: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return { ...state, userDetail: action.payload.data };
    }
    case LOGOUT_SUCCESS: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export default userReducer;
