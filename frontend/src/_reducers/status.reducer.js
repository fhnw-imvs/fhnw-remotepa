// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import { statusConstants } from "../_constants";

const init = {"id":"","standbyOperate":"","rxTX":"","memoryBank":"","input":"","selectedBand":"","txAntenna":"","rxAntenna":"","powerLevel":"","outputPower":"","swrATU":"","swrANT":"","temperatureUPR":"","temperatureLWR":"","temperatureCMB":"","warnings":"","alarms":"","hasError":false,"errorMessage":"","vpa":"","ipa":""};

const statusReducer = (state = init, action) => {
    if (action.type === statusConstants.UPDATE) {
        return {
            state: action.data
        };
    } else {
        return state
    }
};

export default statusReducer;
