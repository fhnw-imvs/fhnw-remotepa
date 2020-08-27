// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
export const changeMode = (checked) => {
    return {
        type: 'CHANGE_MODE',
        payload: checked
    };
};
