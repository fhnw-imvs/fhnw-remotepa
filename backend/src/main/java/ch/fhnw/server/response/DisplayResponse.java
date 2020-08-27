// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Class Display response for serialization.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DisplayResponse {
    private char[] led;
    private char[] line1;
    private char[] line2;
    private char[] line3;
    private char[] line4;
    private char[] line5;
    private char[] line6;
    private char[] line7;
    private char[] line8;
    private String[] selected;
}
