// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React from "react";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
    padding: {
        padding: theme.spacing(2),
    },

    typo: {
        color: theme.palette.text.primary,
        fontWeight: "bold"
    },

}));

function valuetext(value) {
    return {value};
}

/**
 * Validation whether parameter is a number or not
 * @param value {Number}
 * @return {number}
 */
function checkNumber(value) {
    let numb = Number.parseInt(value);

    if(isNaN(numb)){
        return 0
    }
    return numb
}

/**
 * Displays a panel, based on the import parameters
 * @param name {string} - name of the panel
 * @param value {number} - actual value
 * @param marks {Array} - the values and labels for the markers
 * @param step {number} - size of the single steps between marks
 * @param max {number} - the max value of the panel
 * @return Panel with a horizontal value range
 * @constructor
 */
const PaPanel = ({name, value, marks, step, max}) => {
    const classes = useStyles();

    return (
        <div className={classes.padding}>
            <Typography id="discrete-slider" className={classes.typo} gutterBottom>
                {name}
            </Typography>
                <Slider
                    value={checkNumber(value)}
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    step={step}
                    marks={marks}
                    min={0}
                    max={max}
                    valueLabelDisplay="auto"
                />
            <Typography id="discrete-slider"  color={"primary"} gutterBottom>
                {value}
            </Typography>
        </div>
    )
};

export default PaPanel
