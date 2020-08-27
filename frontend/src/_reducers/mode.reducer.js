// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
const initialState = { theme: "light", checked: false };

const modeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_MODE':
            if (action.payload === true) {
                return {
                    theme: "dark",
                    checked: true
                };
            } else {
                return {
                    theme: "light",
                    checked: false
                };
            }
        default:
            return {
                theme: "light",
                checked: false
            };
    }
};

export default modeReducer;
