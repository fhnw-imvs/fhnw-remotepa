// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import allReducers from '../_reducers';

// Based on https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example
export const store = createStore(
    allReducers,
    applyMiddleware(
        thunkMiddleware,
    ),
);
