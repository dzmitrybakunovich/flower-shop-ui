import {AUTHENTICATION_SUCCESS, LOGOUT, SET_USER} from "../../constants/actionTypes";

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  isAuthenticated: !!localStorage.getItem('token') || false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
