// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import { displayConstants } from "../_constants";


export const displayActions = {
    setDisplay,

};

function setDisplay(display) {
    return {
        type: displayConstants.UPDATE,
        data: display };
}
