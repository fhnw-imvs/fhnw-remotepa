// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.controller;

import ch.fhnw.server.constants.HTTP_API;
import ch.fhnw.server.handler.InformationHandler;
import ch.fhnw.server.response.DisplayResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

/**
 * Class display rest controller to handle display REST requests.
 */
@RestController
@RequestMapping(HTTP_API.REST_PREFIX + HTTP_API.TOPIC_DISPLAY)
public class DisplayRestController {

    private final InformationHandler informationHandler;

    /**
     * Instantiates a new display rest controller.
     *
     * @param informationHandler the information handler which handle all informations
     */
    public DisplayRestController(InformationHandler informationHandler) {
        this.informationHandler = informationHandler;
    }

    /**
     * Get display information.
     *
     * @return the displayResponse as mono
     */
    @GetMapping
    public Mono<DisplayResponse> getDisplay() {
        return informationHandler.getDisplay();
    }

}
