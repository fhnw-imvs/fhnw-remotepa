// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import {displayConstants} from "../_constants";

const init = { checked: false };

const displayCheckReducer = (state = init, action) => {

    if (action.type === displayConstants.CHANGE) {
        if (action.payload === true) {
            return {
                checked: true
            };
        } else {
            return {
                checked: false
            };
        }
    }
    else {
        return state
    }
};

export default displayCheckReducer;
