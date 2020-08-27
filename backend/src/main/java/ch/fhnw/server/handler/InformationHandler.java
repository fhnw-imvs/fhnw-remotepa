// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.handler;

import ch.fhnw.server.comPort.IComPortDriver;
import ch.fhnw.server.constants.ERROR_MESSAGES;

import ch.fhnw.server.response.DisplayResponse;
import ch.fhnw.server.response.StatusResponse;
import ch.fhnw.server.service.IDisplayService;
import ch.fhnw.server.service.StatusService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;


/**
 * Class Information handler.
 */
@Service
public class InformationHandler {
    private final Logger log = LoggerFactory.getLogger(this.getClass());
    private final StatusService statusService;
    private final IDisplayService displayService;

    /**
     * Instantiates a new Information handler.
     *
     * @param comPortDriver the comPortDriver to communication with Expert device
     */
    InformationHandler(IComPortDriver comPortDriver, IDisplayService displayService, StatusService statusService) {
        if (comPortDriver.setUp()) {
            this.statusService = statusService;
            this.statusService.setComPortDriver(comPortDriver);

            this.displayService = displayService;
            this.displayService.setComPortDriver(comPortDriver);
        } else {
            log.error(ERROR_MESSAGES.COMPORT_NOT_CONNECTED.getErrorMessage());
            this.displayService = null;
            this.statusService = null;
        }
    }

    @Scheduled(fixedRate = 400)
    private void updateInformation() {
        this.statusService.updateData();
        this.displayService.updateData();
    }

    /**
     * Gets display information.
     *
     * @return the displayResponse
     */
    public Mono<DisplayResponse> getDisplay() {
        return this.displayService.getData();
    }

    /**
     * Gets status information.
     *
     * @return the statusResponse
     */
    public Mono<StatusResponse> getStatus() {
        return this.statusService.getData();
    }

    /**
     * Send command to Expert device.
     *
     * @param command the command as String
     * @return the statusResponse from Expert device
     */
    public Mono<StatusResponse> sendCommand(String command) {
        return this.statusService.sendCommand(command);
    }

}
