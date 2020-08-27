// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.exception;

import org.springframework.security.core.AuthenticationException;

/**
 * The type Jwt authentication exception.
 */
// Based on https://ertan-toker.de/spring-boot-spring-security-jwt-token/
public class JwtAuthenticationException extends AuthenticationException {
    /**
     * Instantiates a new Jwt authentication exception.
     *
     * @param msg the msg as String
     */
    public JwtAuthenticationException(String msg) {
        super(msg);
    }
}
