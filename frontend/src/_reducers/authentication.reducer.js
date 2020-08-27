// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
// Based on https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example
import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: false, user } : {};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
};

export default authenticationReducer;
