package ch.fhnw.server.service;

import ch.fhnw.server.comPort.IComPortDriver;
import ch.fhnw.server.response.StatusResponse;
import reactor.core.publisher.Mono;

/**
 * The interface Status service.
 */
public interface IStatusService {

    /**
     * Gets status data.
     *
     * @return the status data response
     */
    Mono<StatusResponse> getData();

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

    /**
     * Send command to pa.
     *
     * @param command the command for pa
     * @return he status data response
     */
    Mono<StatusResponse> sendCommand(String command);
}

