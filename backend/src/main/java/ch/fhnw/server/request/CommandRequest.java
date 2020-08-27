// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Class Command request for serialization.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommandRequest {
    private String command;
}
