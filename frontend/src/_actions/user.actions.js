// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

// Based on https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example
export const userActions = {
    login,
    logout,
};

function login(username, password, apiUrl) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password, apiUrl)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                }
            ).catch(error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        });
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

