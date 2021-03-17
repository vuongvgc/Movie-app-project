// Auth Reducer: Phục vụ cho đăng nhập, đăng ký, lưu trữ thông tin user đăng nhập
import { GET_USER } from "../constants/user";

const initialState = {
  userDetail: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return { ...state, userDetail: action.payload.data };
    }
    default:
      return state;
  }
};

export default userReducer;
