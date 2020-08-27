// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React from "react";
import AlertMessage from "../../misc/AlertMessage";

/**
 * Shows an error notification when an error occurs in the status string of the device
 * @param comp {Array} Array of the status string
 * @return {JSX.Element} error message
 * @constructor
 */
const ErrorMessagePanel = ({comp}) => {
    let errorMessage;

    if (comp != null) {
        if (comp.hasError) {
            errorMessage = <AlertMessage message={comp.errorMessage}/>;
        }
    } else {
        errorMessage = <AlertMessage message={"Keine Daten vorhanden!"}/>;
    }

    return (
        <div>
            {errorMessage}
        </div>
    )
};

export default ErrorMessagePanel
