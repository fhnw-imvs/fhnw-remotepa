// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import { urlConstants } from "../_constants";

export const urlActions = {
    setHTTP,
    setWebsocket
};

function setHTTP(data) {
    return { type: urlConstants.HTTP, data };
}

function setWebsocket(data) {
    return { type: urlConstants.WEBSOCKET, data };
}

