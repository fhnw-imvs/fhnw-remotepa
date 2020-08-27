// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.constants;

/**
 * The enum Error messages.
 */
public enum ERROR_MESSAGES {
    /**
     * The Comport not connected.
     */
    COMPORT_NOT_CONNECTED("Error, no RemotePA device connected!"),
    /**
     * The Serial port not set.
     */
    SERIAL_PORT_NOT_SET("Serial port not set"),
    /**
     * The Initialization error.
     */
    INITIALIZATION_ERROR("Error initializing serial port"),
    /**
     * The Command not found.
     */
    COMMAND_NOT_FOUND("Error, Command not found!"),
    /**
     * The Convert to object failed.
     */
    CONVERT_TO_OBJECT_FAILED("Error, Conversion to an object has failed!"),
    /**
     * The Communication error.
     */
    COMMUNICATION_ERROR("Error, Device is offline."),
    /**
     * The Decoding error.
     */
    DECODING_ERROR("Error, Error while decoding the command"),
    /**
     * The Token invalid.
     */
    TOKEN_UNAUTHORIZED("Unauthorized - You need to LogIn"),
    /**
     * The Token invalid.
     */
    TOKEN_INVALID("Token Invalid"),
    /**
     * The Token jwt validation failed.
     */
    TOKEN_JWT_VALIDATION_FAILED("JWT Token validation failed"),
    /**
     * The Token validation failed.
     */
    TOKEN_VALIDATION_FAILED("Failed to verify token"),
    /**
     * The Account not found.
     */
    ACCOUNT_NOT_FOUND("Account not found"),
    /**
     * The Password change has failed.
     */
    PASSWORD_CHANGE_FAILED("Password change failed!"),
    /**
     * The Password change was successful.
     */
    PASSWORD_CHANGE_SUCCESSFUL("Password changed!");

    private final String errorMessage;

    ERROR_MESSAGES(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    /**
     * Gets error message.
     *
     * @return the error message
     */
    public String getErrorMessage() {
        return errorMessage;
    }
}
