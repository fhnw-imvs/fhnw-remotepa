// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.service;

import ch.fhnw.server.comPort.IComPortDriver;
import ch.fhnw.server.response.DisplayResponse;
import reactor.core.publisher.Mono;


/**
 * The interface Display service.
 */
public interface IDisplayService {

    /**
     * Gets data.
     *
     * @return the data
     */
    Mono<DisplayResponse> getData();

    /**
     * Update data.
     */
    void updateData();

    /**
     * Sets com port driver.
     *
     * @param comPortDriver the com port driver
     */
    void setComPortDriver(IComPortDriver comPortDriver);

}
