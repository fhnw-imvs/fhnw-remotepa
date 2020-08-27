// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React from 'react'
import {useSelector} from "react-redux";
import TableContent from "./TableContent";
import {Grid, makeStyles, Paper} from "@material-ui/core";
import LedPanelLeft from "./LedLeftPanel";
import LedRightPanel from "./LedRightPanel";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: theme.palette.paper.backgroundColor
    },
    paperTable: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: theme.palette.paperGrey.backgroundColor,
        margin: "auto"
    },
    paperLed: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: theme.palette.paperGrey.backgroundColor
    },
    overview: {
        flexGrow: 1,
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: theme.palette.paperGrey.backgroundColor
    }
}));

/**
 * Displays the component for expert mode. This is not publicly accessible
 * @return {*}
 * @constructor
 */
const DisplayContainer = () => {
    const classes = useStyles();
    const message = useSelector(state => state.displayReducer.state);
    let comp;


    if (message != null) {
        comp = message
    } else {
        comp = null
    }

    if (comp != null && comp.led != null) {
        return (
            <Grid container className={classes.root}>
                <div className={classes.root}>
                    <Paper className={classes.paper} elevation={3}>
                        <Paper className={classes.paperTable} elevation={3}>
                            <TableContent comp={comp}/>
                        </Paper>
                        <Grid container spacing={3}>
                            <Grid item lg={6} md={6} xs={12}>
                                <Paper className={classes.paperLed}>
                                    <LedPanelLeft ledString={comp.led}/>
                                </Paper>
                            </Grid>

                            <Grid item lg={6} md={6} xs={12}>
                                <Paper className={classes.paperLed}>
                                    <LedRightPanel ledString={comp.led}/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </Grid>
        )
    } else {
        return (<h2>Display Service is not implemented</h2>)
    }

};

export default DisplayContainer
