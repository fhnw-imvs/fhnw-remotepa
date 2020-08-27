// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React from "react";
import {Button, Grid, makeStyles, Paper} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {useSelector} from "react-redux";

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

    commandBtn: {
        //marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: theme.spacing(12),
        variant: 'outlined',
        //backgroundColor: theme.palette.button.backgroundColor
    },

    gridPadding: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    }
}));

/**
 * Shows the panel with the commands buttons. Whether a button is input-enabled depends on whether the application is in Normal or Expert mode (not publicly available).
 * @param sendCommand {string} - command for request
 * @return {*}
 * @constructor
 */
const CommandContainer = ({sendCommand}) => {
    const classes = useStyles();
    const originalDisplay = useSelector(state => state.displayCheckReducer.checked);

    return (
        <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
                <Paper className={classes.paper} elevation={3}>
                    <Grid container spacing={2} className={classes.gridPadding} justify={"center"}>
                        <Grid item xs={4} md={4}>
                            <Button fullWidth={true} variant="outlined"
                                    onClick={() => sendCommand("input")}> Input </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button fullWidth={true} variant="outlined" onClick={() => sendCommand("l-minus")}
                                    disabled={!originalDisplay}> <ArrowBackIcon/> L </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button fullWidth={true} variant="outlined" onClick={() => sendCommand("l-plus")}
                                    disabled={!originalDisplay}> L <ArrowForwardIcon/> </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.gridPadding}>
                        <Grid item xs={4} md={4}>
                            <Button fullWidth={true} variant="outlined"
                                    onClick={() => sendCommand("antenna")}> ANT </Button>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Button fullWidth={true} variant="outlined" onClick={() => sendCommand("c-minus")}
                                    disabled={!originalDisplay}> <ArrowBackIcon/> C </Button>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Button fullWidth={true} variant="outlined" onClick={() => sendCommand("c-plus")}
                                    disabled={!originalDisplay}> C <ArrowForwardIcon/> </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.gridPadding}>
                        <Grid item xs={4} md={4}>
                            <Button fullWidth={true} variant="outlined" onClick={() => sendCommand("band-minus")}
                                    disabled={!originalDisplay}> <ArrowBackIcon/> Band </Button>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Button fullWidth={true} variant="outlined" onClick={() => sendCommand("band-plus")}
                                    disabled={!originalDisplay}> Band <ArrowForwardIcon/> </Button>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Button fullWidth={true} variant="outlined" onClick={() => sendCommand("tune")}
                                    disabled={!originalDisplay}> Tune </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

            <Grid item md={6} xs={12}>
                <Paper className={classes.paper} elevation={3}>
                    <Grid container spacing={2} className={classes.gridPadding} justify={"center"}>
                        <Grid item xs={4} md={4}>
                            <Button fullWidth={true} variant="outlined" onClick={() => sendCommand("left")}
                                    disabled={!originalDisplay}> <ArrowBackIcon/> <ArrowUpwardIcon/> </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button fullWidth={true} variant="outlined" onClick={() => sendCommand("right")}
                                    disabled={!originalDisplay}> <ArrowDownwardIcon/> <ArrowForwardIcon/> </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button fullWidth={true} variant="outlined" onClick={() => sendCommand("on")}> ON </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.gridPadding}>
                        <Grid item xs={4} md={4}>
                            <Button fullWidth={true} variant="outlined" onClick={() => sendCommand("cat")}
                                    disabled={!originalDisplay}> CAT </Button>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Button fullWidth={true} variant="outlined"
                                    onClick={() => sendCommand("display")}> DISP </Button>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Button fullWidth={true} variant="outlined"
                                    onClick={() => sendCommand("off")}> OFF </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.gridPadding}>
                        <Grid item xs={4} md={4}>
                            <Button fullWidth={true} variant="outlined" onClick={() => sendCommand("set")}
                                    disabled={!originalDisplay}> SET </Button>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Button fullWidth={true} variant="outlined"
                                    onClick={() => sendCommand("power")}> PWR </Button>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Button fullWidth={true} variant="outlined"
                                    onClick={() => sendCommand("operate")}> OP </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
};

export default CommandContainer



