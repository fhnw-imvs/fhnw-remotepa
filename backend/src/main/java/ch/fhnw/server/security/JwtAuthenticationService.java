// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.security;

import ch.fhnw.server.exception.EntityNotFoundException;
import ch.fhnw.server.constants.ERROR_MESSAGES;
import ch.fhnw.server.model.User;
import ch.fhnw.server.repository.UserRepository;
import ch.fhnw.server.response.JWTTokenResponse;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

/**
 * The type Jwt authentication service.
 */
// Based on https://ertan-toker.de/spring-boot-spring-security-jwt-token/
@Service
public class JwtAuthenticationService {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;

    /**
     * Instantiates a new Jwt authentication service.
     *
     * @param userRepository   the user repository
     * @param jwtTokenProvider the jwt token provider
     * @param passwordEncoder  the password encoder
     */
    public JwtAuthenticationService(UserRepository userRepository, JwtTokenProvider jwtTokenProvider, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.jwtTokenProvider = jwtTokenProvider;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * Generate jwt token mono.
     *
     * @param username the username
     * @param password the password
     * @return the mono
     */
    public Mono<JWTTokenResponse> generateJWTToken(String username, String password) {
        return Mono.just(userRepository.findOneByUsername(username)
                .filter(account -> passwordEncoder.matches(password, account.getPassword()))
                .map(account -> new JWTTokenResponse(jwtTokenProvider.generateToken(username)))
                .orElseThrow(() ->  new EntityNotFoundException(ERROR_MESSAGES.ACCOUNT_NOT_FOUND.getErrorMessage())));

    }

    /**
     * Change password boolean.
     *
     * @param token       the token
     * @param oldPassword the old password
     * @param newPassword the new password
     * @return the boolean
     */
    public boolean changePassword(String token, String oldPassword, String newPassword){
        String username = jwtTokenProvider.getUsernameFromToken(token);
        User account = userRepository.findOneByUsername(username).get();

        if(passwordEncoder.matches(oldPassword, account.getPassword())){
            account.setPassword(passwordEncoder.encode(newPassword));
            userRepository.save(account);
            return true;
        }
        return false;
    }
}
