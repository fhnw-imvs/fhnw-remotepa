// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.exception;

/**
 * Class Entity not found exception.
 */
public class EntityNotFoundException extends RuntimeException {
    /**
     * Instantiates a new Entity not found exception.
     *
     * @param msg the msg as String
     */
    public EntityNotFoundException(String msg) {
        super(msg);
    }
}
