// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {userActions} from '../../_actions';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    FormControl,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    InputLabel
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    loginBtn: {
        marginTop: theme.spacing(2),
    },

    card: {
        marginTop: theme.spacing(10),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        width: 500
    },

}));

/**
 *  The login page is the entry point of the application consisting of the fields "username" and "password"
 *  @return the login page component
 *  @constructor
 */
const LoginPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const apiUrl = useSelector(state => state.urlReducer.HTTP);

    const [user, setUser] = useState({
        username: '',
        password: '',
        submitted: false,
        showPassword: false,
    });

    useEffect(
        () => {
            // reset login status
            dispatch(userActions.logout());

        }, [dispatch]
    );

    /**
     *  Sets the entered username
     *  @param {event} e - event raising by entering username
     *  @return void
     */
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    };

    const handleKeyPress = (target) => {
        if (target.charCode === 13) {
            handleSubmit(target);
        }
    };

    /**
     *  The login process is performed as soon as the user has clicked on the submit button
     *  @param {event} e - event when submit button was pressed
     *  @return void
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({...user, submitted: true});
        if (user.username && user.password) {
            dispatch(userActions.login(user.username.trim(), user.password.trim(), apiUrl));
        }
    };

    /**
     *  The entered password is displayed in plain text
     *  @return void
     */
    const handleClickShowPassword = () => {
        setUser({...user, showPassword: !user.showPassword});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >

            <Card className={classes.card} elevation={5}>
                <CardContent>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="standard-adornment-text">Username</InputLabel>
                        <Input
                            id="username-input"
                            label="Username"
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}/>
                    </FormControl>
                    <br/>


                    <FormControl fullWidth>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="password-input"
                            type={user.showPassword ? 'text' : 'password'}
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {user.showPassword ? <Visibility/> : <VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </CardContent>

                <CardActions>
                    <Button variant="contained"
                            color="primary"
                            className={classes.loginBtn}
                            onClick={handleSubmit}>
                        Login
                    </Button>
                </CardActions>

            </Card>
        </Grid>
    );
};

export default LoginPage;
