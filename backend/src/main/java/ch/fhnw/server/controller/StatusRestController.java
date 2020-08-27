// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.controller;

import ch.fhnw.server.constants.HTTP_API;
import ch.fhnw.server.handler.InformationHandler;
import ch.fhnw.server.response.StatusResponse;
import ch.fhnw.server.service.SocketService;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

/**
 * Class status rest controller to handle status REST requests.
 */
@RestController
@RequestMapping(HTTP_API.REST_PREFIX + HTTP_API.TOPIC_STATUS)
public class StatusRestController {
    private final InformationHandler informationHandler;

    /**
     * Instantiates a new Status rest controller.
     *
     * @param informationHandler the information handler which handle all informations
     */
    public StatusRestController(InformationHandler informationHandler){
        this.informationHandler = informationHandler;
    }

    /**
     * Get status information.
     *
     * @return the statusResponse as mono
     */
    @GetMapping
    public Mono<StatusResponse> getStatus(){
        return  informationHandler.getStatus();
    }

    /**
     * Send command to Expert device.
     *
     * @param command the command as String
     * @return the statusResponse as mono
     */
    @PostMapping("/{command}")
    public Mono<StatusResponse> setStatus(@PathVariable String command){
        return informationHandler.sendCommand(command).doOnSuccess(SocketService::sendStatus);
    }
}
