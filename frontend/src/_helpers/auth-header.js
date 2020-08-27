// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import { connectionConstants } from "../_constants";

// Based on https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example
export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'X-Authorization': 'Bearer ' + user.token };
    } else {
        console.log(connectionConstants.JWT_NO_DATA);
        return {};
    }
}
