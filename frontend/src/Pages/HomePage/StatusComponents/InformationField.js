// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({

    span: {
        color: theme.palette.text.primary,
        fontWeight: "bold"
    },

    paper: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: theme.palette.paperGrey.backgroundColor,

    },
}));

/**
 * Displays a component with a label text and a value
 * @param label {string} - label text of the field
 * @param value {*} - value of the field
 * @return {*}
 * @constructor
 */
const InformationField = ({label, value}) => {
    const classes = useStyles();
    return (
        <Grid item xs={4} md={2}>
            <Paper className={classes.paper}>
                <Typography color={"primary"}>
                    <span className={classes.span}> {label} </span>
                    <br/>
                    {value}
                </Typography>
            </Paper>
        </Grid>
    )
};

export default InformationField
