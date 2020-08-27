// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React from 'react';
import {Route, Router} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import {history} from '../_helpers';
import {PrivateRoute} from '../_components';
import LoginPage from "../Pages/LoginPage/LoginPage";
import AlertMessage from "../misc/AlertMessage";
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import { urlActions } from "../_actions";
import { useCookies } from "react-cookie";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import HomePage from "../Pages/HomePage/HomePage";


const dark = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: blue[500],
        },
        paper: {
            backgroundColor: grey[900],
        },

        paperGrey: {},

        button: {
            backgroundColor: grey[800],
        }
    },
});


const light = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: teal[500],
        },

        paper: {},

        paperGrey: {
            backgroundColor: grey[200],
        },

        button: {}
    },

});



const App = () => {
    const alert = useSelector(state => state.alertReducer);
    const dispatch = useDispatch();
    const [cookie] = useCookies(['mode']);
    let mode = (cookie.mode === "true");

    const urlElements = window.location.href.split('/')
    let wsURL;

    if(urlElements[0] === "http:"){
        wsURL = "ws://" + urlElements[2] + "/ws"
    } else {
        wsURL = "wss://" + urlElements[2] + "/ws"
    }

    const httpURL = urlElements[0] + "//" + urlElements[2] + "/api"

    dispatch(urlActions.setHTTP(httpURL))
    dispatch(urlActions.setWebsocket(wsURL))

    return (
        <MuiThemeProvider theme={mode ? dark : light}>
        <Container>
            {alert.message &&
            <AlertMessage message={alert.message}/>
            }
            <Router history={history}>
                    <PrivateRoute path="/" component={HomePage} exact/>
                    <Route path="/login" component={LoginPage} />
                    <PrivateRoute path="/profile" component={ProfilePage} exact/>
            </Router>
        </Container>
        </MuiThemeProvider>
    );
};

export default App;
