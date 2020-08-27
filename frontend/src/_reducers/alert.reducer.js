// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
// Based on https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example
import { alertConstants } from '../_constants';

/**
 * Alert reducer to set the message whether it is a "danger" or a "success" message
 * @param state {Array}
 * @param action
 * @return {{type: string, message: *}|{}}
 */
const alertReducer = (state = [], action) => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
};

export default alertReducer;
