// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React from 'react'
import {AppBar, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from '@material-ui/icons/Home';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import {changeDisplay} from "../_actions";
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import VerticalSplitOutlinedIcon from '@material-ui/icons/VerticalSplitOutlined';
import { appConstants } from "../_constants";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: theme.spacing(3),
    },
    menuButton: {
        flexGrow: 1,
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textDecoration: 'none',
    },
}));

/**
 * Header Component
 * Creates the header of the website
 * @returns Returns the header bar with icons of the application
 * @constructor
 */
const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const message = useSelector(state => state.statusReducer.state);
    const displayCheck = useSelector(state => state.displayCheckReducer.checked);
    let id = "";

    if (message != null) {
        id = message.id
    }

    /**
     *   Redirects to the path "/login"
     *   @return void
     */
    const handleSubmit = () => {
        history.push("/login")
    };

    /**
     *  Redirects to the path "/profile"
     *  @return void
     */
    const handleProfile = () => {
        history.push("/profile")
    };

    /**
     *  Redirects back to the homepage
     *  @return void
     */
    const handleHome = () => {
        history.push("/")
    };

    /**
     *  The checkbox sets the state of the display view.
     *  Checkbox = true: Display view
     *  Checkbox = false: Status View
     *  @param event {event} - event of clicking the checkbox
     *  @return void
     */
    const handleChange = (event) => {
        dispatch(changeDisplay(event.target.checked));
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {appConstants.APP_HEADER}  - {id}
                    </Typography>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        onClick={handleHome}
                        color="inherit"
                    >
                        <Home/>
                    </IconButton>

                    <Checkbox
                        icon={<VerticalSplitOutlinedIcon/>}
                        checkedIcon={<VerticalSplitIcon/>}
                        checked={displayCheck}
                        onChange={handleChange}
                        name="displayCheck"
                        // label={"white"}
                    />

                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        onClick={handleProfile}
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>

                    <IconButton
                        edge="end"
                        aria-label="exit to app"
                        aria-haspopup="true"
                        onClick={handleSubmit}
                        color="inherit"
                    >
                        <ExitToAppIcon/>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header
