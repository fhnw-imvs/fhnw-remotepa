// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.controller;

import ch.fhnw.server.constants.HTTP_API;
import ch.fhnw.server.exception.EntityNotFoundException;
import ch.fhnw.server.request.AuthenticationRequest;
import ch.fhnw.server.response.JWTTokenResponse;
import ch.fhnw.server.security.JwtAuthenticationService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

/**
 * Class Authentication controller.
 */
// Based on https://ertan-toker.de/spring-boot-spring-security-jwt-token/
@RestController
@RequestMapping(HTTP_API.REST_PREFIX + HTTP_API.TOPIC_LOGIN)
public class LoginController {

    private final JwtAuthenticationService jwtAuthenticationService;

    /**
     * Instantiates a new Authentication controller with the jwtAuthenticationService.
     *
     * @param jwtAuthenticationService the jwt authentication service
     */
    public LoginController(JwtAuthenticationService jwtAuthenticationService) {
        this.jwtAuthenticationService = jwtAuthenticationService;
    }

    /**
     * Create customer method to check credentials .
     *
     * @param request with login and password for authentication
     * @return a new JWT Token for authentication
     */
    @PostMapping
    public Mono<JWTTokenResponse> createCustomer(@RequestBody AuthenticationRequest request) {
        return jwtAuthenticationService.generateJWTToken(request.getUsername(), request.getPassword());
    }

    /**
     * Handle entity not found exception response entity.
     *
     * @param ex exception if entity not found
     * @return the response entity exception
     */
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<String> handleEntityNotFoundException(EntityNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }


}
