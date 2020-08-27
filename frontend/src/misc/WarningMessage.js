// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginBottom: theme.spacing(1),
    },
}));

/**
 * Returns a warning component with the import text as warning text
 * @param message {string} - Message text
 * @return {*}
 * @constructor
 */
const AlertMessage = ({message}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert severity="warning">{message}</Alert>
        </div>
    );
};

export default AlertMessage;
