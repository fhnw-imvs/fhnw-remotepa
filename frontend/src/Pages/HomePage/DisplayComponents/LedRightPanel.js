// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React from "react";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    padding: {
        padding: theme.spacing(2),

    },
}));

/**
 * Displays a LED panel with 3 LEDs. Whether an LED is lit or not depends on the import parameter.
 * @param ledString {string} - A 7-bit string consisting of 1 and 0
 * @return {*}
 * @constructor
 */
const LedRightPanel = ({ledString}) => {
    const classes = useStyles();

    return (
        <div className={classes.padding}>
            {/*STANDBY MODE*/}
            <FormControlLabel
                value="ON"
                control={<Radio
                    checked={ledString[5] === '0'}
                    color="primary"
                    disableRipple
                />
                }
                label="ON"
                labelPlacement="top"
            />

            {/*OPERATE MODE*/}
            <FormControlLabel
                value="OP"
                control={<Radio
                    checked={ledString[3] === '0'}
                    color="primary"
                    disableRipple
                />}
                label="OP"
                labelPlacement="top"
            />

            {/*TX MODE*/}
            <FormControlLabel
                value="TX"
                control={<Radio
                    checked={ledString[4] === '0'}
                    color="primary"
                    disableRipple
                />}
                label="TX"
                labelPlacement="top"
            />
        </div>
    );
};

export default LedRightPanel
