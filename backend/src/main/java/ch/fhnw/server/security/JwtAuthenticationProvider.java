// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.security;

import ch.fhnw.server.constants.ERROR_MESSAGES;
import ch.fhnw.server.exception.JwtAuthenticationException;
import io.jsonwebtoken.JwtException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

/**
 * The type Jwt authentication provider.
 */
// Based on https://ertan-toker.de/spring-boot-spring-security-jwt-token/
@Component
public class JwtAuthenticationProvider implements AuthenticationProvider {
    private static final Logger log = LoggerFactory.getLogger(JwtAuthenticationProvider.class);

    private final JwtTokenProvider jwtTokenProvider;

    /**
     * Instantiates a new Jwt authentication provider.
     */
    @SuppressWarnings("unused")
    public JwtAuthenticationProvider() {
        this(null);
    }

    /**
     * Instantiates a new Jwt authentication provider.
     *
     * @param jwtTokenProvider the jwt token provider
     */
    @Autowired
    public JwtAuthenticationProvider(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {

        try {
            String token = (String) authentication.getCredentials();
            String username = jwtTokenProvider.getUsernameFromToken(token);

            return jwtTokenProvider.validateToken(token)
                    .map(aBoolean -> new JwtAuthenticatedProfile(username))
                    .orElseThrow(() -> new JwtAuthenticationException(ERROR_MESSAGES.TOKEN_JWT_VALIDATION_FAILED.getErrorMessage()));

        } catch (JwtException ex) {
            log.error(String.format(ERROR_MESSAGES.TOKEN_VALIDATION_FAILED + ": %s", ex.getMessage()));
            throw new JwtAuthenticationException(ERROR_MESSAGES.TOKEN_VALIDATION_FAILED.getErrorMessage());
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return JwtAuthentication.class.equals(authentication);
    }
}
