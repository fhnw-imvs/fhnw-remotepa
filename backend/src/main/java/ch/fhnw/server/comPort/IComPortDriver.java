// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.comPort;


/**
 * The interface Serial connection.
 */
public interface IComPortDriver {

    /**
     * Sets up.
     * @return if setUp was successful
     */
    boolean setUp();

    /**
     * Write read to serial byte [ ].
     * @param command      the command for Expert device
     * @param responseSize the response size
     * @return the the response from Expert
     */
    byte[] writeReadToSerial(byte command, int responseSize);

    /**
     * Power on expert.
     */
    void powerOnExpert();

}
