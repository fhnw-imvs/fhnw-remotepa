// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.service;

import ch.fhnw.server.constants.WS_API;
import ch.fhnw.server.response.DisplayResponse;
import ch.fhnw.server.response.TokenErrorResponse;
import ch.fhnw.server.response.StatusResponse;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

/**
 * Class Socket service.
 */
// Based on https://stackoverflow.com/questions/48406465/spring-send-message-to-websocket-on-event/48407985 licensed under CC BY-SA 4.0
@Service
public class SocketService {
    private static SimpMessagingTemplate template;

    /**
     * Set simple messaging template.
     *
     * @param tmplt the template
     */
    public static void setTemplate(SimpMessagingTemplate tmplt){
        template = tmplt;
    }

    /**
     * Send status from Expert device.
     *
     * @param statusResponse the status response
     */
    public static void sendStatus(StatusResponse statusResponse){
        template.convertAndSend(WS_API.TOPIC_DESTINATION_PREFIX + WS_API.TOPIC_STATUS, statusResponse);
    }

    /**
     * Send display from Expert device.
     *
     * @param displayResponse the display response
     */
    public static void sendDisplay(DisplayResponse displayResponse){
        template.convertAndSend(WS_API.TOPIC_DESTINATION_PREFIX + WS_API.TOPIC_DISPLAY, displayResponse);
    }

    /**
     * Send token error.
     *
     * @param tokenError the token error
     */
    public static void sendTokenError(String tokenError){
        template.convertAndSend(WS_API.TOPIC_DESTINATION_PREFIX + WS_API.TOPIC_STATUS, new TokenErrorResponse(tokenError));
    }
}

