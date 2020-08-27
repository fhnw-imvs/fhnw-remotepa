// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React, {useEffect, useState} from 'react'
import Container from "@material-ui/core/Container";

import StatusContainer from "./StatusComponents/StatusContainer"
import {alertActions, statusActions} from '../../_actions';
import {useDispatch, useSelector} from "react-redux";
import CommandContainer from "./CommandComponents/CommandContainer";
import {authHeader} from "../../_helpers";
import * as Stomp from "stompjs";
import {useHistory} from "react-router-dom";
import AlertMessage from "../../misc/AlertMessage";
import { connectionConstants } from "../../_constants";
import DisplayContainer from "./DisplayComponents/DisplayContainer";
import {displayActions} from "../../_actions";
import Loader from "../../misc/Loader";

/**
 * This component builds the entire application. As well as the communication via the StompClient.
 * @return {JSX.Element} Body page
 * @constructor
 */
const Body = () => {

    //Set URL
    const apiSocketUrl = useSelector(state => state.urlReducer.WEBSOCKET);
    const apiRestUrl = useSelector(state => state.urlReducer.HTTP);

    //Websocket
    const ws = new WebSocket(apiSocketUrl);
    const [stompClient] = useState(Stomp.over(ws));

    //Data Store
    const history = useHistory();
    const dispatch = useDispatch();

    //Local informations
    const [wsIsConnected, setWsIsConnected] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({'isError': false, 'message': ''});
    const displayCheck = useSelector(state => state.displayCheckReducer.checked);

    useEffect(
        () => {
            /**
             * Initial HTTP Request to read server Data
             * @param serverUrl {string} - server URL
             * @return void
             */
            const initialStatusRead = async (serverUrl) => {
                const response = await fetch(serverUrl + "/rest/status", {
                    method: "GET",
                    headers: authHeader()
                });

                await response.json()
                    .then(s => dispatch(statusActions.setStatus(s)));
                setIsLoading(false)
            };

            initialStatusRead(apiRestUrl).catch(() => {
                setError({'isError': true, 'message': connectionConstants.NETWORK_ERROR});
                setIsLoading(true);
                history.push("/login");

            });

            /**
             * Initial HTTP Request to read display data
             * @param serverUrl {string} - server URL
             * @return void
             */
            const initialDisplayRead = async (serverUrl) => {
                const response = await fetch(serverUrl + "/rest/display", {
                    method: "GET",
                    headers: authHeader()
                });

                await response.json()
                    .then(s => dispatch(displayActions.setDisplay(s)));
                setIsLoading(false)
            };

            initialDisplayRead(apiRestUrl).catch(() => {
                setError({'isError': true, 'message': connectionConstants.NETWORK_ERROR});
                setIsLoading(true);
                history.push("/login");

            });

            /**
             * Configure and connect to WebSocket
             * @return void
             */
            const connectSocket = () => {
                //Based on https://stomp-js.github.io/stomp-websocket/codo/extra/docs-src/Usage.md.html

                // client will send heartbeats every 5000ms --> Default is 10,000ms
                stompClient.heartbeat.outgoing = 5000;
                stompClient.heartbeat.incoming = 5000;

                //Disable debug
                stompClient.debug = null;

                // Add the following if you need automatic reconnect (delay is in milli seconds)
                stompClient.reconnect_delay = 1000;

                /**
                 * Status Data is transferred and displayed
                 * @param status
                 */
                const onStatusMessageCallBack = status => {
                    if (status.body) {
                        if (status.body.includes("tokenError")) {
                            const error = JSON.parse(status.body).tokenError;
                            dispatch(alertActions.error(error));
                            history.push("/login");
                        } else {
                            dispatch(statusActions.setStatus(JSON.parse(status.body)));
                        }
                    } else {
                        dispatch(AlertMessage(connectionConstants.NO_DATA_RECEIVED));
                    }
                };

                /**
                 * Display Data is transferred and displayed
                 * @param display
                 * @return void
                 */
                const onDisplayMessageCallBack = display => {
                    if (display.body) {
                        if (display.body.includes("tokenError")) {
                            const error = JSON.parse(display.body).tokenError;
                            dispatch(alertActions.error(error));
                            history.push("/login");
                        } else {
                            dispatch(displayActions.setDisplay(JSON.parse(display.body)));
                        }
                    } else {
                        dispatch(AlertMessage(connectionConstants.NO_DATA_RECEIVED));
                    }
                };

                /**
                 * Triggers an alert action
                 * @param error
                 */
                const errorCallBack = function (error) {
                    console.log(error);
                    dispatch(alertActions.error(connectionConstants.WS_CONNECTION_LOST))
                };

                /**
                 *  the call backs are connected. channels "/topic/status" and "/topic/display" are subscribed
                 */
                const connectCallBack = function () {
                    stompClient.subscribe('/topic/status', onStatusMessageCallBack, authHeader());
                    stompClient.subscribe('/topic/display', onDisplayMessageCallBack, authHeader());
                    setIsLoading(false);
                    setWsIsConnected(true);
                    dispatch(alertActions.clear())
                };

                // Verbindung aufbauen
                stompClient.connect(authHeader(), connectCallBack, errorCallBack);
            };


            connectSocket();

            return () => {
                /**
                 *  Terminates connection to the web socket
                 *  @return void
                 */
                stompClient.disconnect();
            }
        }, [stompClient, apiRestUrl, dispatch, history]
    );

    /**
     * Sends the command via POST request
     * @param receiveCmd {string} - command
     * @return void
     */
    const sendCommand = (receiveCmd) => {
        if(wsIsConnected){
            stompClient.send("/app/status", authHeader(), JSON.stringify({'command': receiveCmd}));
        }
    };


    let comp;
    if (isLoading) {
        comp = <Loader/>
    } else {
        if (error.isError) {
            comp = <AlertMessage message={error.message}/>
        } else {
            if (displayCheck) {
                comp = <DisplayContainer/>
            } else {
                comp = <StatusContainer/>
            }
        }
    }

    return (
        <React.Fragment>
            <Container>
                <div>
                    {comp}
                    <CommandContainer sendCommand={sendCommand}/>
                </div>

            </Container>
        </React.Fragment>
    );
};

export default Body;
