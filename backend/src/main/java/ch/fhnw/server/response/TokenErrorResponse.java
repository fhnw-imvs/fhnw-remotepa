// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.response;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * Class Token error response for serialization.
 */
@Data
@AllArgsConstructor
public class TokenErrorResponse {
    private String tokenError;
}
