// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React, { useEffect} from 'react'
import Container from "@material-ui/core/Container";
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "../Header";
import Footer from "../Footer";
import BodyPP from "./BodyPP";

import { alertActions } from '../../_actions';
import { useDispatch} from "react-redux";



/**
 * Returns the profile page.
 * @returns {JSX.Element} Profile page consisting of the header component , the body component and the footer component
 * @constructor
 */
const ProfilePage = () => {
    const dispatch = useDispatch();


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
                    <BodyPP/>
                    <Footer/>
                </Container>
        </React.Fragment>
    )
};

export default ProfilePage;
