import {AUTHENTICATION_SUCCESS, LOGOUT, SET_USER} from "../../constants/actionTypes";


export const authenticateSuccess = (token) => {
  return {
    type: AUTHENTICATION_SUCCESS,
    payload: {
      token: token
    }
  };
};

export const setUser = (userInfo) => {
  return {
    type: SET_USER,
    payload: {
      user: userInfo,
    },
  };
};


export const logout = () => {
  localStorage.clear()
  return {
    type: LOGOUT,
  };
};