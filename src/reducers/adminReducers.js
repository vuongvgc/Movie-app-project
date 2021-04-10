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
  RESET_STATUS,
  UPDATE_ADMIN_USER_REQUEST,
  UPDATE_ADMIN_USER_SUCCESS,
  UPDATE_ADMIN_USER_FAIL,
} from "../constants/Admin";
import deleteItemInArr from "../utils/deleteItemInArr";
import addItemInArr from "../utils/addItemInArr";
import updateItemInArr from "../utils/updateItem";
const initialState = {
  userList: null,
  loading: true,
  error: null,
  updateUser: { loading: true, success: false, error: null },
  addUser: { loading: true, success: false, error: null },
  deleteUser: { loading: true, success: false, error: null },
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
        addUser: {
          ...state.addUser,
          loading: true,
          error: null,
          success: false,
        },
      };
    }
    case ADD_USER_SUCCESS: {
      let userList = state.userList.items;
      let userItem = action.payload.user;
      return {
        ...state,
        userList: {
          ...state.userList,
          items: addItemInArr(userList, userItem),
        },
        addUser: {
          ...state.addUser,
          loading: false,
          success: true,
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
          success: false,
          error: action.payload.error,
        },
      };
    }
    case DELETE_USER_REQUEST: {
      return {
        ...state,
        deleteUser: {
          ...state.deleteUser,
          loading: true,
          error: null,
          success: false,
        },
      };
    }
    case DELETE_USER_SUCCESS: {
      console.log(action.payload.user);
      // let newUserList = state.userList.items.filter(
      //   (item) => item.taiKhoan !== action.payload.user
      // );
      // console.log(newUserList);
      let userDelete = action.payload.user;
      let oldUserList = state.userList.items;
      return {
        ...state,
        userList: {
          ...state.userList,
          items: deleteItemInArr(oldUserList, userDelete),
        },
        deleteUser: {
          ...state.deleteUser,
          loading: false,
          success: true,
          error: null,
        },
      };
    }
    case DELETE_USER_FAIL: {
      return {
        ...state,
        deleteUser: {
          ...state.deleteUser,
          loading: false,
          success: false,
          error: action.payload.error,
        },
      };
    }
    case UPDATE_ADMIN_USER_REQUEST: {
      return {
        ...state,
        updateUser: {
          ...state.updateUser,
          loading: true,
          error: null,
          success: false,
        },
      };
    }
    case UPDATE_ADMIN_USER_SUCCESS: {
      return {
        ...state,
        userList: {
          ...state.userList,
          items: updateItemInArr(
            state.userList.items,
            action.payload.data,
            action.payload.taiKhoan
          ),
        },
        updateUser: {
          ...state.updateUser,
          loading: false,
          success: true,
          error: null,
        },
      };
    }
    case UPDATE_ADMIN_USER_FAIL: {
      return {
        ...state,
        updateUser: {
          ...state.updateUser,
          loading: false,
          success: false,
          error: true,
        },
      };
    }
    case RESET_STATUS: {
      return {
        ...state,
        updateUser: { loading: true, success: false, error: null },
        addUser: { loading: true, success: false, error: null },
        deleteUser: { loading: true, success: false, error: null },
      };
    }
    default:
      return state;
  }
};

export default adminReducers;
