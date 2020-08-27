// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import { urlConstants } from '../_constants';

/**
 * URL reducer to set the url for the whole page
 * @param state {Array}
 * @param action
 * @return {{type: string, message: *}|{}}
 */
const init = {"HTTP":"","WEBSOCKET":""};

const urlReducer = (state = init, action) => {
    switch (action.type) {
        case urlConstants.HTTP:
            return {
                ...state, HTTP: action.data
            };
        case urlConstants.WEBSOCKET:
            return {
                ...state, WEBSOCKET: action.data
            };
        default:
            return state
    }
};

export default urlReducer;
