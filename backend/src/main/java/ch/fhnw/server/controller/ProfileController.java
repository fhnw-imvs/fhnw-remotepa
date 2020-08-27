// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.controller;

import ch.fhnw.server.constants.HTTP_API;
import ch.fhnw.server.constants.ERROR_MESSAGES;
import ch.fhnw.server.request.ProfileRequest;
import ch.fhnw.server.response.ApiResponse;
import ch.fhnw.server.security.JwtAuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 * Class Profile controller.
 */
@RestController
@RequestMapping(HTTP_API.REST_PREFIX + HTTP_API.TOPIC_PROFILE)
public class ProfileController {

    @Value("${jwt.header}")
    private String tokenHeader;

    @Autowired
    private JwtAuthenticationService jwtAuthenticationService;


    /**
     * Change password response entity.
     *
     * @param profileRequest     the profile request with old and new password
     * @param httpServletRequest the http servlet request
     * @return ResponseEntity if change was successful
     */
    @PostMapping
    public ResponseEntity<ApiResponse> changePassword(@RequestBody ProfileRequest profileRequest, HttpServletRequest httpServletRequest) {
        final String requestHeader = httpServletRequest.getHeader(this.tokenHeader);
        final String authToken = requestHeader.substring(7);

        if(jwtAuthenticationService.changePassword(authToken, profileRequest.getOldPassword(), profileRequest.getNewPassword())){
            return new ResponseEntity<>(new ApiResponse(ERROR_MESSAGES.PASSWORD_CHANGE_SUCCESSFUL.getErrorMessage()), HttpStatus.OK);
        }
        return new ResponseEntity<>(new ApiResponse(ERROR_MESSAGES.PASSWORD_CHANGE_FAILED.getErrorMessage()), HttpStatus.FORBIDDEN);
    }
}
