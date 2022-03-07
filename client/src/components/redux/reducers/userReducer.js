import {
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOGOUT,
} from "../actionsTypes";

const userInit = {
  users: null,
  user: null,
  errors: null,
  loading: false,
  token: null,
  isAuth: null,
};

const userReducer = (state = userInit, { type, payload }) => {
  switch (type) {
    case REGISTER:
    case LOGIN:
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
        errors: null,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        user: payload.user,
        errors: null,
        isAuth: true,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        errors: null,
        isAuth: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        loading: false,
        user: null,
        users: null,
        errors: null,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default userReducer;
