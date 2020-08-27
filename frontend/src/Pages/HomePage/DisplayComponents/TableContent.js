// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React from 'react'
import {makeStyles} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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

    table: {
        maxWidth: "800px",
        paddingRight: theme.spacing(0),
    },

    tableBody: {
        padding: "0px",
    },

    tableRow: {
      height: "30px"
    },


    tableCell: {
        textAlign: "center",
        //fontFamily: "monospace",
        fontFamily: "serif",
        fontSize: "20px",
        letterSpacing: "0px",
        padding: "0px",
        paddingBottom: "5px",
        paddingTop: "5px",
        width: "15px",
        borderBottom: "none",
        lineHeight: "20px"
    },

    tableCellColored: {
        textAlign: "center",
        //fontFamily: "monospace",
        fontFamily: "serif",
        fontSize: "20px",
        letterSpacing: "0px",
        padding: "0px",
        paddingBottom: "5px",
        paddingTop: "5px",
        width: "15px",
        backgroundColor: theme.palette.primary.main,
        borderBottom: "none",
        lineHeight: "20px",
        minHeight: "10px"
    },
}));

/**
 * Displays the display data in a table. The values that are selected are highlighted with a different background color. The data to be highlighted is defined in the string comp.selected.
 * @param comp {Array} - Array with the display data in a 8x40 matrix
 * @return Table with the display data of the terminal
 * @constructor
 */
const TableContent = ({comp}) => {
    const classes = useStyles();

    return (
        /* eslint-disable */
        <Table className={classes.table} style={{ margin: 'auto' }}>
            <TableBody className={classes.tableBody}>
                <TableRow className={classes.tableRow}>
                    <TableCell
                        className={comp.selected[0] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[0]}</TableCell>
                    <TableCell
                        className={comp.selected[1] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[1]}</TableCell>
                    <TableCell
                        className={comp.selected[2] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[2]}</TableCell>
                    <TableCell
                        className={comp.selected[3] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[3]}</TableCell>
                    <TableCell
                        className={comp.selected[4] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[4]}</TableCell>
                    <TableCell
                        className={comp.selected[5] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[5]}</TableCell>
                    <TableCell
                        className={comp.selected[6] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[6]}</TableCell>
                    <TableCell
                        className={comp.selected[7] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[7]}</TableCell>
                    <TableCell
                        className={comp.selected[8] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[8]}</TableCell>
                    <TableCell
                        className={comp.selected[9] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[9]}</TableCell>
                    <TableCell
                        className={comp.selected[10] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[10]}</TableCell>
                    <TableCell
                        className={comp.selected[11] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[11]}</TableCell>
                    <TableCell
                        className={comp.selected[12] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[12]}</TableCell>
                    <TableCell
                        className={comp.selected[13] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[13]}</TableCell>
                    <TableCell
                        className={comp.selected[14] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[14]}</TableCell>
                    <TableCell
                        className={comp.selected[15] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[15]}</TableCell>
                    <TableCell
                        className={comp.selected[16] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[16]}</TableCell>
                    <TableCell
                        className={comp.selected[17] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[17]}</TableCell>
                    <TableCell
                        className={comp.selected[18] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[18]}</TableCell>
                    <TableCell
                        className={comp.selected[19] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[19]}</TableCell>
                    <TableCell
                        className={comp.selected[20] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[20]}</TableCell>
                    <TableCell
                        className={comp.selected[21] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[21]}</TableCell>
                    <TableCell
                        className={comp.selected[22] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[22]}</TableCell>
                    <TableCell
                        className={comp.selected[23] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[23]}</TableCell>
                    <TableCell
                        className={comp.selected[24] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[24]}</TableCell>
                    <TableCell
                        className={comp.selected[25] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[25]}</TableCell>
                    <TableCell
                        className={comp.selected[26] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[26]}</TableCell>
                    <TableCell
                        className={comp.selected[27] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[27]}</TableCell>
                    <TableCell
                        className={comp.selected[28] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[28]}</TableCell>
                    <TableCell
                        className={comp.selected[29] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[29]}</TableCell>
                    <TableCell
                        className={comp.selected[30] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[30]}</TableCell>
                    <TableCell
                        className={comp.selected[31] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[31]}</TableCell>
                    <TableCell
                        className={comp.selected[32] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[32]}</TableCell>
                    <TableCell
                        className={comp.selected[33] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[33]}</TableCell>
                    <TableCell
                        className={comp.selected[34] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[34]}</TableCell>
                    <TableCell
                        className={comp.selected[35] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[35]}</TableCell>
                    <TableCell
                        className={comp.selected[36] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[36]}</TableCell>
                    <TableCell
                        className={comp.selected[37] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[37]}</TableCell>
                    <TableCell
                        className={comp.selected[38] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[38]}</TableCell>
                    <TableCell
                        className={comp.selected[39] == 1 ? classes.tableCellColored : classes.tableCell}>{comp.line1[39]}</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                    <TableCell
                        className={comp.selected[0] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[0]}</TableCell>
                    <TableCell
                        className={comp.selected[1] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[1]}</TableCell>
                    <TableCell
                        className={comp.selected[2] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[2]}</TableCell>
                    <TableCell
                        className={comp.selected[3] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[3]}</TableCell>
                    <TableCell
                        className={comp.selected[4] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[4]}</TableCell>
                    <TableCell
                        className={comp.selected[5] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[5]}</TableCell>
                    <TableCell
                        className={comp.selected[6] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[6]}</TableCell>
                    <TableCell
                        className={comp.selected[7] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[7]}</TableCell>
                    <TableCell
                        className={comp.selected[8] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[8]}</TableCell>
                    <TableCell
                        className={comp.selected[9] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[9]}</TableCell>
                    <TableCell
                        className={comp.selected[10] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[10]}</TableCell>
                    <TableCell
                        className={comp.selected[11] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[11]}</TableCell>
                    <TableCell
                        className={comp.selected[12] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[12]}</TableCell>
                    <TableCell
                        className={comp.selected[13] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[13]}</TableCell>
                    <TableCell
                        className={comp.selected[14] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[14]}</TableCell>
                    <TableCell
                        className={comp.selected[15] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[15]}</TableCell>
                    <TableCell
                        className={comp.selected[16] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[16]}</TableCell>
                    <TableCell
                        className={comp.selected[17] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[17]}</TableCell>
                    <TableCell
                        className={comp.selected[18] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[18]}</TableCell>
                    <TableCell
                        className={comp.selected[19] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[19]}</TableCell>
                    <TableCell
                        className={comp.selected[20] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[20]}</TableCell>
                    <TableCell
                        className={comp.selected[21] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[21]}</TableCell>
                    <TableCell
                        className={comp.selected[22] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[22]}</TableCell>
                    <TableCell
                        className={comp.selected[23] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[23]}</TableCell>
                    <TableCell
                        className={comp.selected[24] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[24]}</TableCell>
                    <TableCell
                        className={comp.selected[25] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[25]}</TableCell>
                    <TableCell
                        className={comp.selected[26] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[26]}</TableCell>
                    <TableCell
                        className={comp.selected[27] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[27]}</TableCell>
                    <TableCell
                        className={comp.selected[28] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[28]}</TableCell>
                    <TableCell
                        className={comp.selected[29] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[29]}</TableCell>
                    <TableCell
                        className={comp.selected[30] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[30]}</TableCell>
                    <TableCell
                        className={comp.selected[31] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[31]}</TableCell>
                    <TableCell
                        className={comp.selected[32] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[32]}</TableCell>
                    <TableCell
                        className={comp.selected[33] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[33]}</TableCell>
                    <TableCell
                        className={comp.selected[34] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[34]}</TableCell>
                    <TableCell
                        className={comp.selected[35] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[35]}</TableCell>
                    <TableCell
                        className={comp.selected[36] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[36]}</TableCell>
                    <TableCell
                        className={comp.selected[37] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[37]}</TableCell>
                    <TableCell
                        className={comp.selected[38] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[38]}</TableCell>
                    <TableCell
                        className={comp.selected[39] == 2 ? classes.tableCellColored : classes.tableCell}>{comp.line2[39]}</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                    <TableCell
                        className={comp.selected[0] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[0]}</TableCell>
                    <TableCell
                        className={comp.selected[1] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[1]}</TableCell>
                    <TableCell
                        className={comp.selected[2] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[2]}</TableCell>
                    <TableCell
                        className={comp.selected[3] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[3]}</TableCell>
                    <TableCell
                        className={comp.selected[4] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[4]}</TableCell>
                    <TableCell
                        className={comp.selected[5] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[5]}</TableCell>
                    <TableCell
                        className={comp.selected[6] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[6]}</TableCell>
                    <TableCell
                        className={comp.selected[7] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[7]}</TableCell>
                    <TableCell
                        className={comp.selected[8] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[8]}</TableCell>
                    <TableCell
                        className={comp.selected[9] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[9]}</TableCell>
                    <TableCell
                        className={comp.selected[10] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[10]}</TableCell>
                    <TableCell
                        className={comp.selected[11] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[11]}</TableCell>
                    <TableCell
                        className={comp.selected[12] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[12]}</TableCell>
                    <TableCell
                        className={comp.selected[13] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[13]}</TableCell>
                    <TableCell
                        className={comp.selected[14] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[14]}</TableCell>
                    <TableCell
                        className={comp.selected[15] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[15]}</TableCell>
                    <TableCell
                        className={comp.selected[16] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[16]}</TableCell>
                    <TableCell
                        className={comp.selected[17] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[17]}</TableCell>
                    <TableCell
                        className={comp.selected[18] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[18]}</TableCell>
                    <TableCell
                        className={comp.selected[19] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[19]}</TableCell>
                    <TableCell
                        className={comp.selected[20] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[20]}</TableCell>
                    <TableCell
                        className={comp.selected[21] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[21]}</TableCell>
                    <TableCell
                        className={comp.selected[22] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[22]}</TableCell>
                    <TableCell
                        className={comp.selected[23] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[23]}</TableCell>
                    <TableCell
                        className={comp.selected[24] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[24]}</TableCell>
                    <TableCell
                        className={comp.selected[25] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[25]}</TableCell>
                    <TableCell
                        className={comp.selected[26] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[26]}</TableCell>
                    <TableCell
                        className={comp.selected[27] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[27]}</TableCell>
                    <TableCell
                        className={comp.selected[28] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[28]}</TableCell>
                    <TableCell
                        className={comp.selected[29] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[29]}</TableCell>
                    <TableCell
                        className={comp.selected[30] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[30]}</TableCell>
                    <TableCell
                        className={comp.selected[31] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[31]}</TableCell>
                    <TableCell
                        className={comp.selected[32] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[32]}</TableCell>
                    <TableCell
                        className={comp.selected[33] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[33]}</TableCell>
                    <TableCell
                        className={comp.selected[34] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[34]}</TableCell>
                    <TableCell
                        className={comp.selected[35] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[35]}</TableCell>
                    <TableCell
                        className={comp.selected[36] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[36]}</TableCell>
                    <TableCell
                        className={comp.selected[37] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[37]}</TableCell>
                    <TableCell
                        className={comp.selected[38] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[38]}</TableCell>
                    <TableCell
                        className={comp.selected[39] == 4 ? classes.tableCellColored : classes.tableCell}>{comp.line3[39]}</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                    <TableCell
                        className={comp.selected[0] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[0]}</TableCell>
                    <TableCell
                        className={comp.selected[1] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[1]}</TableCell>
                    <TableCell
                        className={comp.selected[2] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[2]}</TableCell>
                    <TableCell
                        className={comp.selected[3] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[3]}</TableCell>
                    <TableCell
                        className={comp.selected[4] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[4]}</TableCell>
                    <TableCell
                        className={comp.selected[5] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[5]}</TableCell>
                    <TableCell
                        className={comp.selected[6] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[6]}</TableCell>
                    <TableCell
                        className={comp.selected[7] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[7]}</TableCell>
                    <TableCell
                        className={comp.selected[8] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[8]}</TableCell>
                    <TableCell
                        className={comp.selected[9] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[9]}</TableCell>
                    <TableCell
                        className={comp.selected[10] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[10]}</TableCell>
                    <TableCell
                        className={comp.selected[11] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[11]}</TableCell>
                    <TableCell
                        className={comp.selected[12] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[12]}</TableCell>
                    <TableCell
                        className={comp.selected[13] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[13]}</TableCell>
                    <TableCell
                        className={comp.selected[14] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[14]}</TableCell>
                    <TableCell
                        className={comp.selected[15] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[15]}</TableCell>
                    <TableCell
                        className={comp.selected[16] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[16]}</TableCell>
                    <TableCell
                        className={comp.selected[17] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[17]}</TableCell>
                    <TableCell
                        className={comp.selected[18] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[18]}</TableCell>
                    <TableCell
                        className={comp.selected[19] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[19]}</TableCell>
                    <TableCell
                        className={comp.selected[20] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[20]}</TableCell>
                    <TableCell
                        className={comp.selected[21] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[21]}</TableCell>
                    <TableCell
                        className={comp.selected[22] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[22]}</TableCell>
                    <TableCell
                        className={comp.selected[23] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[23]}</TableCell>
                    <TableCell
                        className={comp.selected[24] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[24]}</TableCell>
                    <TableCell
                        className={comp.selected[25] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[25]}</TableCell>
                    <TableCell
                        className={comp.selected[26] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[26]}</TableCell>
                    <TableCell
                        className={comp.selected[27] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[27]}</TableCell>
                    <TableCell
                        className={comp.selected[28] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[28]}</TableCell>
                    <TableCell
                        className={comp.selected[29] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[29]}</TableCell>
                    <TableCell
                        className={comp.selected[30] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[30]}</TableCell>
                    <TableCell
                        className={comp.selected[31] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[31]}</TableCell>
                    <TableCell
                        className={comp.selected[32] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[32]}</TableCell>
                    <TableCell
                        className={comp.selected[33] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[33]}</TableCell>
                    <TableCell
                        className={comp.selected[34] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[34]}</TableCell>
                    <TableCell
                        className={comp.selected[35] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[35]}</TableCell>
                    <TableCell
                        className={comp.selected[36] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[36]}</TableCell>
                    <TableCell
                        className={comp.selected[37] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[37]}</TableCell>
                    <TableCell
                        className={comp.selected[38] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[38]}</TableCell>
                    <TableCell
                        className={comp.selected[39] == 8 ? classes.tableCellColored : classes.tableCell}>{comp.line4[39]}</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                    <TableCell
                        className={comp.selected[0] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[0]}</TableCell>
                    <TableCell
                        className={comp.selected[1] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[1]}</TableCell>
                    <TableCell
                        className={comp.selected[2] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[2]}</TableCell>
                    <TableCell
                        className={comp.selected[3] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[3]}</TableCell>
                    <TableCell
                        className={comp.selected[4] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[4]}</TableCell>
                    <TableCell
                        className={comp.selected[5] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[5]}</TableCell>
                    <TableCell
                        className={comp.selected[6] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[6]}</TableCell>
                    <TableCell
                        className={comp.selected[7] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[7]}</TableCell>
                    <TableCell
                        className={comp.selected[8] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[8]}</TableCell>
                    <TableCell
                        className={comp.selected[9] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[9]}</TableCell>
                    <TableCell
                        className={comp.selected[10] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[10]}</TableCell>
                    <TableCell
                        className={comp.selected[11] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[11]}</TableCell>
                    <TableCell
                        className={comp.selected[12] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[12]}</TableCell>
                    <TableCell
                        className={comp.selected[13] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[13]}</TableCell>
                    <TableCell
                        className={comp.selected[14] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[14]}</TableCell>
                    <TableCell
                        className={comp.selected[15] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[15]}</TableCell>
                    <TableCell
                        className={comp.selected[16] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[16]}</TableCell>
                    <TableCell
                        className={comp.selected[17] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[17]}</TableCell>
                    <TableCell
                        className={comp.selected[18] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[18]}</TableCell>
                    <TableCell
                        className={comp.selected[19] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[19]}</TableCell>
                    <TableCell
                        className={comp.selected[20] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[20]}</TableCell>
                    <TableCell
                        className={comp.selected[21] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[21]}</TableCell>
                    <TableCell
                        className={comp.selected[22] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[22]}</TableCell>
                    <TableCell
                        className={comp.selected[23] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[23]}</TableCell>
                    <TableCell
                        className={comp.selected[24] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[24]}</TableCell>
                    <TableCell
                        className={comp.selected[25] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[25]}</TableCell>
                    <TableCell
                        className={comp.selected[26] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[26]}</TableCell>
                    <TableCell
                        className={comp.selected[27] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[27]}</TableCell>
                    <TableCell
                        className={comp.selected[28] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[28]}</TableCell>
                    <TableCell
                        className={comp.selected[29] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[29]}</TableCell>
                    <TableCell
                        className={comp.selected[30] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[30]}</TableCell>
                    <TableCell
                        className={comp.selected[31] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[31]}</TableCell>
                    <TableCell
                        className={comp.selected[32] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[32]}</TableCell>
                    <TableCell
                        className={comp.selected[33] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[33]}</TableCell>
                    <TableCell
                        className={comp.selected[34] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[34]}</TableCell>
                    <TableCell
                        className={comp.selected[35] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[35]}</TableCell>
                    <TableCell
                        className={comp.selected[36] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[36]}</TableCell>
                    <TableCell
                        className={comp.selected[37] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[37]}</TableCell>
                    <TableCell
                        className={comp.selected[38] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[38]}</TableCell>
                    <TableCell
                        className={comp.selected[39] == 16 ? classes.tableCellColored : classes.tableCell}>{comp.line5[39]}</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                    <TableCell
                        className={comp.selected[0] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[0]}</TableCell>
                    <TableCell
                        className={comp.selected[1] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[1]}</TableCell>
                    <TableCell
                        className={comp.selected[2] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[2]}</TableCell>
                    <TableCell
                        className={comp.selected[3] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[3]}</TableCell>
                    <TableCell
                        className={comp.selected[4] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[4]}</TableCell>
                    <TableCell
                        className={comp.selected[5] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[5]}</TableCell>
                    <TableCell
                        className={comp.selected[6] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[6]}</TableCell>
                    <TableCell
                        className={comp.selected[7] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[7]}</TableCell>
                    <TableCell
                        className={comp.selected[8] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[8]}</TableCell>
                    <TableCell
                        className={comp.selected[9] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[9]}</TableCell>
                    <TableCell
                        className={comp.selected[10] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[10]}</TableCell>
                    <TableCell
                        className={comp.selected[11] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[11]}</TableCell>
                    <TableCell
                        className={comp.selected[12] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[12]}</TableCell>
                    <TableCell
                        className={comp.selected[13] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[13]}</TableCell>
                    <TableCell
                        className={comp.selected[14] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[14]}</TableCell>
                    <TableCell
                        className={comp.selected[15] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[15]}</TableCell>
                    <TableCell
                        className={comp.selected[16] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[16]}</TableCell>
                    <TableCell
                        className={comp.selected[17] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[17]}</TableCell>
                    <TableCell
                        className={comp.selected[18] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[18]}</TableCell>
                    <TableCell
                        className={comp.selected[19] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[19]}</TableCell>
                    <TableCell
                        className={comp.selected[20] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[20]}</TableCell>
                    <TableCell
                        className={comp.selected[21] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[21]}</TableCell>
                    <TableCell
                        className={comp.selected[22] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[22]}</TableCell>
                    <TableCell
                        className={comp.selected[23] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[23]}</TableCell>
                    <TableCell
                        className={comp.selected[24] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[24]}</TableCell>
                    <TableCell
                        className={comp.selected[25] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[25]}</TableCell>
                    <TableCell
                        className={comp.selected[26] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[26]}</TableCell>
                    <TableCell
                        className={comp.selected[27] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[27]}</TableCell>
                    <TableCell
                        className={comp.selected[28] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[28]}</TableCell>
                    <TableCell
                        className={comp.selected[29] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[29]}</TableCell>
                    <TableCell
                        className={comp.selected[30] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[30]}</TableCell>
                    <TableCell
                        className={comp.selected[31] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[31]}</TableCell>
                    <TableCell
                        className={comp.selected[32] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[32]}</TableCell>
                    <TableCell
                        className={comp.selected[33] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[33]}</TableCell>
                    <TableCell
                        className={comp.selected[34] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[34]}</TableCell>
                    <TableCell
                        className={comp.selected[35] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[35]}</TableCell>
                    <TableCell
                        className={comp.selected[36] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[36]}</TableCell>
                    <TableCell
                        className={comp.selected[37] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[37]}</TableCell>
                    <TableCell
                        className={comp.selected[38] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[38]}</TableCell>
                    <TableCell
                        className={comp.selected[39] == 32 ? classes.tableCellColored : classes.tableCell}>{comp.line6[39]}</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                    <TableCell
                        className={comp.selected[0] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[0]}</TableCell>
                    <TableCell
                        className={comp.selected[1] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[1]}</TableCell>
                    <TableCell
                        className={comp.selected[2] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[2]}</TableCell>
                    <TableCell
                        className={comp.selected[3] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[3]}</TableCell>
                    <TableCell
                        className={comp.selected[4] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[4]}</TableCell>
                    <TableCell
                        className={comp.selected[5] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[5]}</TableCell>
                    <TableCell
                        className={comp.selected[6] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[6]}</TableCell>
                    <TableCell
                        className={comp.selected[7] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[7]}</TableCell>
                    <TableCell
                        className={comp.selected[8] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[8]}</TableCell>
                    <TableCell
                        className={comp.selected[9] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[9]}</TableCell>
                    <TableCell
                        className={comp.selected[10] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[10]}</TableCell>
                    <TableCell
                        className={comp.selected[11] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[11]}</TableCell>
                    <TableCell
                        className={comp.selected[12] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[12]}</TableCell>
                    <TableCell
                        className={comp.selected[13] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[13]}</TableCell>
                    <TableCell
                        className={comp.selected[14] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[14]}</TableCell>
                    <TableCell
                        className={comp.selected[15] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[15]}</TableCell>
                    <TableCell
                        className={comp.selected[16] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[16]}</TableCell>
                    <TableCell
                        className={comp.selected[17] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[17]}</TableCell>
                    <TableCell
                        className={comp.selected[18] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[18]}</TableCell>
                    <TableCell
                        className={comp.selected[19] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[19]}</TableCell>
                    <TableCell
                        className={comp.selected[20] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[20]}</TableCell>
                    <TableCell
                        className={comp.selected[21] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[21]}</TableCell>
                    <TableCell
                        className={comp.selected[22] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[22]}</TableCell>
                    <TableCell
                        className={comp.selected[23] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[23]}</TableCell>
                    <TableCell
                        className={comp.selected[24] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[24]}</TableCell>
                    <TableCell
                        className={comp.selected[25] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[25]}</TableCell>
                    <TableCell
                        className={comp.selected[26] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[26]}</TableCell>
                    <TableCell
                        className={comp.selected[27] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[27]}</TableCell>
                    <TableCell
                        className={comp.selected[28] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[28]}</TableCell>
                    <TableCell
                        className={comp.selected[29] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[29]}</TableCell>
                    <TableCell
                        className={comp.selected[30] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[30]}</TableCell>
                    <TableCell
                        className={comp.selected[31] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[31]}</TableCell>
                    <TableCell
                        className={comp.selected[32] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[32]}</TableCell>
                    <TableCell
                        className={comp.selected[33] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[33]}</TableCell>
                    <TableCell
                        className={comp.selected[34] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[34]}</TableCell>
                    <TableCell
                        className={comp.selected[35] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[35]}</TableCell>
                    <TableCell
                        className={comp.selected[36] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[36]}</TableCell>
                    <TableCell
                        className={comp.selected[37] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[37]}</TableCell>
                    <TableCell
                        className={comp.selected[38] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[38]}</TableCell>
                    <TableCell
                        className={comp.selected[39] == 64 ? classes.tableCellColored : classes.tableCell}>{comp.line7[39]}</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                    <TableCell
                        className={comp.selected[0] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[0]}</TableCell>
                    <TableCell
                        className={comp.selected[1] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[1]}</TableCell>
                    <TableCell
                        className={comp.selected[2] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[2]}</TableCell>
                    <TableCell
                        className={comp.selected[3] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[3]}</TableCell>
                    <TableCell
                        className={comp.selected[4] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[4]}</TableCell>
                    <TableCell
                        className={comp.selected[5] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[5]}</TableCell>
                    <TableCell
                        className={comp.selected[6] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[6]}</TableCell>
                    <TableCell
                        className={comp.selected[7] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[7]}</TableCell>
                    <TableCell
                        className={comp.selected[8] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[8]}</TableCell>
                    <TableCell
                        className={comp.selected[9] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[9]}</TableCell>
                    <TableCell
                        className={comp.selected[10] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[10]}</TableCell>
                    <TableCell
                        className={comp.selected[11] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[11]}</TableCell>
                    <TableCell
                        className={comp.selected[12] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[12]}</TableCell>
                    <TableCell
                        className={comp.selected[13] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[13]}</TableCell>
                    <TableCell
                        className={comp.selected[14] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[14]}</TableCell>
                    <TableCell
                        className={comp.selected[15] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[15]}</TableCell>
                    <TableCell
                        className={comp.selected[16] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[16]}</TableCell>
                    <TableCell
                        className={comp.selected[17] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[17]}</TableCell>
                    <TableCell
                        className={comp.selected[18] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[18]}</TableCell>
                    <TableCell
                        className={comp.selected[19] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[19]}</TableCell>
                    <TableCell
                        className={comp.selected[20] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[20]}</TableCell>
                    <TableCell
                        className={comp.selected[21] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[21]}</TableCell>
                    <TableCell
                        className={comp.selected[22] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[22]}</TableCell>
                    <TableCell
                        className={comp.selected[23] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[23]}</TableCell>
                    <TableCell
                        className={comp.selected[24] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[24]}</TableCell>
                    <TableCell
                        className={comp.selected[25] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[25]}</TableCell>
                    <TableCell
                        className={comp.selected[26] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[26]}</TableCell>
                    <TableCell
                        className={comp.selected[27] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[27]}</TableCell>
                    <TableCell
                        className={comp.selected[28] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[28]}</TableCell>
                    <TableCell
                        className={comp.selected[29] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[29]}</TableCell>
                    <TableCell
                        className={comp.selected[30] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[30]}</TableCell>
                    <TableCell
                        className={comp.selected[31] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[31]}</TableCell>
                    <TableCell
                        className={comp.selected[32] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[32]}</TableCell>
                    <TableCell
                        className={comp.selected[33] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[33]}</TableCell>
                    <TableCell
                        className={comp.selected[34] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[34]}</TableCell>
                    <TableCell
                        className={comp.selected[35] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[35]}</TableCell>
                    <TableCell
                        className={comp.selected[36] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[36]}</TableCell>
                    <TableCell
                        className={comp.selected[37] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[37]}</TableCell>
                    <TableCell
                        className={comp.selected[38] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[38]}</TableCell>
                    <TableCell
                        className={comp.selected[39] == 128 ? classes.tableCellColored : classes.tableCell}>{comp.line8[39]}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default TableContent
