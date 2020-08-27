// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.constants;

/**
 * Class WS_API for our constants.
 */
public class WS_API {
    private WS_API() {}

    /**
     * The websocket constant for TOPIC_DESTINATION_PREFIX.
     */
    public static final String TOPIC_DESTINATION_PREFIX = "/topic";
    /**
     * The websocket constant for TOPIC_STATUS.
     */
    public static final String TOPIC_STATUS = "/status";
    /**
     * The websocket constant for TOPIC_DISPLAY.
     */
    public static final String TOPIC_DISPLAY = "/display";
    /**
     * The websocket constant for APP_PREFIX.
     */
    public static final String APP_PREFIX = "/app";
    /**
     * The websocket constant for HANDSHAKE.
     */
    public static final String HANDSHAKE = "/ws";


}
