// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.controller;

import ch.fhnw.server.constants.WS_API;
import ch.fhnw.server.handler.InformationHandler;
import ch.fhnw.server.request.CommandRequest;
import ch.fhnw.server.response.StatusResponse;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import reactor.core.publisher.Mono;

/**
 * Class Web socket controller to receive commands about websockets.
 */
@Controller
public class WebSocketController {
    private final InformationHandler informationHandler;

    /**
     * Instantiates a new Web socket controller.
     *
     * @param informationHandler the information handler which handle all informations
     */
    public WebSocketController(InformationHandler informationHandler){
        this.informationHandler = informationHandler;
    }

    /**
     * Send and receive WS messages.
     *
     * @param commandRequest the command request for Expert device
     * @return the statusResponse as mono
     */
    @MessageMapping({WS_API.TOPIC_STATUS})
    @SendTo(WS_API.TOPIC_DESTINATION_PREFIX + WS_API.TOPIC_STATUS)
    public Mono<StatusResponse> statusController(CommandRequest commandRequest) {
        return informationHandler.sendCommand(commandRequest.getCommand());
    }
}
