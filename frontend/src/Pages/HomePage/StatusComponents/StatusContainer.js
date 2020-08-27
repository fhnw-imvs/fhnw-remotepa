// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React from 'react'
import { useSelector } from "react-redux";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import PaPanel from "./PaPanel";
import InformationField from "./InformationField";
import LedLeftPanel from "./LedLeftPanel";
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

    overview: {
        flexGrow: 1,
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: theme.palette.paperGrey.backgroundColor
    },

}));

/**
 * Displays the Container status. This contains the data of the status string
 * @return Components with the data of the status string
 * @constructor
 */
const StatusContainer = () => {
    const classes = useStyles();

    const message = useSelector(state => state.statusReducer.state);
    let comp;

    /**
     * The individual marks for displaying the value PaOut {PaPanel}
     */
    const marksPaOut = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 375,
            label: '375',
        },
        {
            value: 750,
            label: '750',
        },
        {
            value: 1125,
            label: '1125',
        },
        {
            value: 1500,
            label: '1500',
        },
    ];

    /**
     * The individual marks for displaying the value PaI {PaPanel}
     */
    const marksPaI = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 12.5,
            label: '12.5',
        },
        {
            value: 25,
            label: '25',
        },
        {
            value: 37.5,
            label: '37.5',
        },
        {
            value: 50,
            label: '50',
        },
    ];

    if (message != null) {
        comp = message;
    } else {
        comp = " ";
    }

    return (
        <Grid container className={classes.root}>
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={3}>

                    <Grid container spacing={3}>
                        <Grid item lg={6} md={6} xs={12}>
                            <LedLeftPanel selectedState={comp.standbyOperate}/>
                        </Grid>

                        <Grid item lg={6} md={6} xs={12}>
                            <LedRightPanel rxTX={comp.rxTX}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item lg={6} md={6} xs={12}>
                            <Paper className={classes.overview}>
                                <PaPanel name={"Pa Out"} value={comp.outputPower} marks={marksPaOut} step={75}
                                         max={1500}/>
                            </Paper>
                        </Grid>

                        <Grid item lg={6} md={6} xs={12}>
                            <Paper className={classes.overview}>
                                <PaPanel name={"I Pa"} value={comp.ipa} marks={marksPaI} step={2.5} max={50}/>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.root}>
                        <Grid container spacing={2} justify="center">
                            <InformationField label={"IN"} value={comp.input}/>
                            <InformationField label={"BAND"} value={comp.selectedBand}/>
                            <InformationField label={"ANT"} value={comp.txAntenna}/>
                            <InformationField label={"OUT"} value={comp.powerLevel}/>
                            <InformationField label={"SWR"} value={comp.swrATU}/>
                            <InformationField label={"TEMP"} value={comp.temperatureUPR}/>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </Grid>
    )

};

export default StatusContainer
