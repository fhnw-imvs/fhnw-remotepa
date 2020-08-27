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
const LedLeftPanel = ({ledString}) => {
    const classes = useStyles();

    return (
        <div className={classes.padding}>
            {/*ALARM MODE*/}
            <FormControlLabel
                value="ALARM"
                control={<Radio
                    checked={ledString[0] === '0'}
                    color="primary"
                    disableRipple
                />}
                label="ALARM"
                labelPlacement="top"
            />

            {/*TUNE MODE*/}
            <FormControlLabel
                value="TUNE"
                control={<Radio
                    checked={ledString[1] === '0'}
                    color="primary"
                    disableRipple
                />}
                label="TUNE"
                labelPlacement="top"
            />

            {/*SET MODE*/}
            <FormControlLabel
                value="SET"
                control={<Radio
                    checked={ledString[2] === '0'}
                    color="primary"
                    disableRipple
                />}
                label="SET"
                labelPlacement="top"
            />
        </div>
    );
};

export default LedLeftPanel
