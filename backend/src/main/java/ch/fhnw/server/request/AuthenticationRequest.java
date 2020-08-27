// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.request;

import lombok.Data;

/**
 * Class Authentication request for serialization.
 */
@Data
public class AuthenticationRequest {
    private String username;
    private String password;
}
