// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React, {useState} from 'react'
import {Grid, InputAdornment, makeStyles, Paper} from "@material-ui/core";
import {changeMode} from "../../_actions";
import {useCookies} from 'react-cookie';
import { useDispatch, useSelector } from "react-redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import {useHistory} from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textAlign: 'left',
        backgroundColor: theme.palette.paper.backgroundColor
    },

    overview: {
        flexGrow: 1,
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: theme.palette.paperGrey.backgroundColor
    },

    section: {
        paddingBottom: theme.spacing(3),
    },

    form: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

}));

/**
 * The body part of the profile page. In this component the password can be changed and the mode (Bright / Dark) can be selected.
 * @return The body part of the profile page consisting of 3 password fields and a switch toggle for the mode
 * @constructor
 */
const BodyPP = () => {

    const [cookie, setCookie] = useCookies();
    const [openPasswordSet, setopenPasswordSet] = useState(false);
    const [openPasswordNotSet, setopenPasswordNotSet] = useState(false);

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const apiUrl = useSelector(state => state.urlReducer.HTTP);
    let user = JSON.parse(localStorage.getItem('user'));
    let checked;

    /**
     *  Password object
     *  @type {{oldPassword: string, newPassword: string, confirmPassword: string, showOldPassword: boolean, showNewPassword: boolean, showConfirmPassword: boolean}}
     */
    const [password, setPassword] = React.useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
        showOldPassword: false,
        showNewPassword: false,
        showConfirmPassword: false
    });

    /**
     *  Checks whether the form is valid
     *  @return {boolean} true, if form is valid otherwise false
     */
    const validateForm = () => {
        return (
            password.newPassword.length > 7 &&
            password.newPassword === password.confirmPassword
        );
    };

    /**
     *  Changes the respective password in the password object
     *  @param {event} event - event raised by entering passwords
     *  @return void
     */
    const handleFieldChange = (event) => {
        const {name, value} = event.target;
        setPassword({...password, [name]: value});
    };

    /**
     * Executes a POST request to the backend with the password data from the password object
     * @return {Promise<void>}
     */
    async function handleSetPasswordClick() {
        // POST request using fetch with error handling
        const requestOptions = {
            method: "POST",
            headers: {'Content-Type': 'application/json', 'X-Authorization': 'Bearer ' + user.token},
            body: JSON.stringify({oldPassword: password.oldPassword, newPassword: password.newPassword})
        };
        fetch(apiUrl + "/rest/profile", requestOptions)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                } else {
                    setopenPasswordSet(true);
                    setPassword({
                        oldPassword: "",
                        newPassword: "",
                        confirmPassword: "",
                        showOldPassword: false,
                        showNewPassword: false,
                        showConfirmPassword: false
                    })
                }

                /*                this.setState({ postId: data.id })*/
            })
            .catch(error => {
                setopenPasswordNotSet(true);
                /*                this.setState({ errorMessage: error.toString() });*/
                console.error('There was an error!', error);
            });
    }

    /**
     *  Calls the method for setting the cookie {setCookieValue} and stores the new value in the state
     *  @param {event} event - event by changing the mode
     */
    const handleCookieChange = (event) => {
        dispatch(changeMode(event.target.checked));
        setCookieValue(event);
    };

    /**
     *  Sets a cookie for the selected mode, so that when the page is refreshed, the selected mode remains.
     *  @param {event} event - event by changing the mode
     *  @return void
     */
    const setCookieValue = (event) => {
        setCookie('mode', event.target.checked, {sameSite: 'Strict', secure: false});
    };

    if (cookie.mode === "true") {
        checked = Boolean(true);
    } else {
        checked = Boolean(false);
    }

    /**
     *
     */
    const handlePasswordSetClose = () => {
        setopenPasswordSet(false);
        history.push("/login")
    };

    const handlePasswordNotSetClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setopenPasswordNotSet(false);
    };

    /**
     *  Shows the password in plain text based on the parameter
     *  @param {string} pw - Shortcut for selected password
     *  @return void
     */
    const handleClickShowPassword = (pw) => {
        if(pw === 'OP'){
            return setPassword({...password, showOldPassword: !password.showOldPassword});
        } else if(pw === 'NP') {
            return setPassword({...password, showNewPassword: !password.showNewPassword});
        } else if(pw === 'CP') {
            return setPassword({...password, showConfirmPassword: !password.showConfirmPassword});
        }
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    /**
     *  Redirects back to the homepage
     *  @return void
     */
    const handleHome = () => {
        history.push("/")
    };

    return (
        <Grid container className={classes.root}>
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={3}>
                    <h1>Profilanpassungen</h1>
                    <div className={classes.section}>
                        <h3>Passwortänderung</h3>

                        <form className={classes.form} noValidate autoComplete="off">
                            <div>
                                <TextField
                                    id="oldPassword"
                                    name="oldPassword"
                                    label="Altes Password"
                                    type={password.showOldPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    // variant="outlined"
                                    onChange={handleFieldChange}
                                    value={password.oldPassword}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => handleClickShowPassword('OP')}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {password.showOldPassword ? <Visibility/> : <VisibilityOff/>}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />

                                <TextField
                                    id="newPassword"
                                    name="newPassword"
                                    label="Neues Password"
                                    type={password.showNewPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    // variant="outlined"
                                    onChange={handleFieldChange}
                                    value={password.newPassword}
                                    helperText="Mind. 8 Zeichen"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => handleClickShowPassword('NP')}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {password.showNewPassword ? <Visibility/> : <VisibilityOff/>}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />

                                <TextField
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    label="Password wiederholen"
                                    type={password.showConfirmPassword ? 'text' : 'password'}
                                    // autoComplete="current-password"
                                    // variant="outlined"
                                    onChange={handleFieldChange}
                                    value={password.confirmPassword}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => handleClickShowPassword('CP')}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {password.showConfirmPassword ? <Visibility/> : <VisibilityOff/>}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </div>
                            <Button variant="contained" color="primary" onClick={handleSetPasswordClick}
                                    disabled={!validateForm()}>
                                Passwort setzen
                            </Button>
                        </form>
                    </div>
                    <div className={classes.section}>
                        <h3>Modus</h3>
                        <FormControlLabel
                            edge="end"
                            control={<Switch checked={checked} onChange={handleCookieChange}
                                             name="checked" color={"primary"}/>}
                            label="Dark Mode"
                        />
                    </div>
                    <Button variant="contained" color="primary" onClick={handleHome}>
                        Zurück
                    </Button>

                </Paper>
            </div>

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={openPasswordSet}
                autoHideDuration={6000}
                onClose={handlePasswordSetClose}
                message="Password set"
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handlePasswordSetClose}>
                            <CloseIcon fontSize="small"/>
                        </IconButton>
                    </React.Fragment>
                }
            />

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={openPasswordNotSet}
                autoHideDuration={6000}
                onClose={handlePasswordNotSetClose}
                message="Error, password not set!"
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="secondary"
                                    onClick={handlePasswordNotSetClose}>
                            <CloseIcon fontSize="small"/>
                        </IconButton>
                    </React.Fragment>
                }
            />
        </Grid>
    )
};

export default BodyPP
