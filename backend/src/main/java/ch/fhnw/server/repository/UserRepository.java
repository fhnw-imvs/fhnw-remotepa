// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.repository;

import ch.fhnw.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * The interface User repository.
 */
public interface UserRepository extends JpaRepository<User, String> {

    /**
     * Find one by username optional.
     *
     * @param username the username
     * @return the optional
     */
    Optional<User> findOneByUsername(String username);
}
