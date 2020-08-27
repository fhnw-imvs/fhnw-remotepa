// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React, { useEffect } from 'react'
import Container from "@material-ui/core/Container";
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "../Header";
import Footer from "../Footer";
import Body from "./Body";
import { alertActions } from '../../_actions';
import { useDispatch, useSelector } from "react-redux";
import NotificationPanel from "./NotificationPanel";
import ErrorMessagePanel from "./ErrorMessagePanel";



/**
 *  The start page with the ErrorMessage Panel, the NotificationPanel and the Status Container is built
 *  @return {JSX.Element} Header | ErrorPanel | NotificationPanel | Body | Footer
 *  @constructor
 */
const HomePage = () => {
    const dispatch = useDispatch();

    let statusData = useSelector(state => state.statusReducer.state);
    let status = "";

    if (statusData != null) {
        status = statusData
    }

    useEffect(
        () => {
            dispatch(alertActions.clear());
        }, [dispatch]
    );

    return (
        <React.Fragment>
                <CssBaseline/>
                <Container>
                    <Header/>
                    <ErrorMessagePanel comp={status}/>
                    <NotificationPanel warning={status.warnings} alarm={status.alarms}/>
                    <Body/>
                    <Footer/>
                </Container>
        </React.Fragment>
    )
};

export default HomePage;
