// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import { combineReducers } from 'redux';

import authenticationReducer from './authentication.reducer';
import usersReducer from './users.reducer';
import alertReducer from './alert.reducer';
import statusReducer from "./status.reducer";
import displayReducer from "./display.reducer";
import modeReducer from "./mode.reducer";
import displayCheckReducer from "./displayCheck.reducer";
import urlReducer from "./url.reducer";

const allReducers = combineReducers({
  authenticationReducer,
  usersReducer,
  alertReducer,
  statusReducer,
  displayReducer,
  displayCheckReducer,
  modeReducer,
  urlReducer
});

export default allReducers;
