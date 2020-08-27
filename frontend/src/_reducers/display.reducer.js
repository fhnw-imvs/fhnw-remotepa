// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import { displayConstants } from "../_constants";

const init = {"led": "", "line1":"", "line2":"", "line3":"", "line4":"", "line5":"", "line6":"", "line7":"", "line8":"", "selected":""};

const displayReducer = (state = init, action) => {

    if (action.type === displayConstants.UPDATE) {
        return {
            state: action.data
        };
    }
    else {
        return state
    }
};

export default displayReducer;
