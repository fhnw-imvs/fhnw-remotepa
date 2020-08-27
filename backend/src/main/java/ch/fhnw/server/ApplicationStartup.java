// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server;

import ch.fhnw.server.model.User;
import ch.fhnw.server.repository.UserRepository;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

/**
 * Class Application startup. Runs only in "dev" mode to create users in DB.
 */
@Profile("dev")
@Component
public class ApplicationStartup implements ApplicationListener<ApplicationReadyEvent> {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    /**
     * Instantiates a new Application startup.
     *
     * @param userRepository  the user repository
     * @param passwordEncoder the password encoder
     */
    public ApplicationStartup(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * Method delete and create new users
     * @param event the event
     */
    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {
        userRepository.deleteAll();
        User user = new User();
        user.setUsername("admin");
        user.setPassword(passwordEncoder.encode("admin"));

        userRepository.save(user);
    }
}
