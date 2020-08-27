// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import { statusConstants } from "../_constants";


export const statusActions = {
    setStatus,

};

function setStatus(status) {
    return {
        type: statusConstants.UPDATE,
        data: status };
}
