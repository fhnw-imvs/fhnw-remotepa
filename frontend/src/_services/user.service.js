// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
// Based on https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example
export const userService = {
    login,
    logout,
};


/**
 * Login request with username and password
 * @param username {string} - username
 * @param password {string} - password
 * @param apiUrl {string} - backend url
 * @return {Promise<Response>}
 */
function login(username, password, apiUrl) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    };

    return fetch(`${apiUrl}/rest/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

/**
 * Logout request
 */
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

/**
 *
 * @param response
 * @return {*} data
 */
function handleResponse(response) {
    return response.text().then(text => {
        let data;
        try {
            data = JSON.parse(text);
        } catch (err) {
            data = text;
        }
        //const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // eslint-disable-next-line no-restricted-globals
                location.reload();
            }

            const error = (data && data.message) || text;
            return Promise.reject(error);
        }
        return data;
    });
}
