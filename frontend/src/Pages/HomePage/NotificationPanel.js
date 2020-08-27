// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React from "react";
import AlertMessage from "../../misc/AlertMessage";
import WarningMessage from "../../misc/WarningMessage";

/**
 * Displays a warning notification and/or an alert notification depending on the input parameter
 * @param warning {string} - warning text
 * @param alarm {string} - error text
 * @return {JSX.Element}
 * @constructor
 */
const NotificationPanel = ({warning, alarm}) => {
    let warningMessage;
    let alertMessage;

    //Error-Handling Warnings
    if (warning !== "" && warning != null) {
        warningMessage = <WarningMessage message={warning} />
    }

    //Error-Handling Alarms
    if (alarm !== "" && alarm != null) {
        alertMessage = <AlertMessage message={alarm}/>;
    }

    return (
        <div>
            {warningMessage}
            {alertMessage}
        </div>
    )

};

export default NotificationPanel
