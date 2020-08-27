// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Class Status response for serialization.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class StatusResponse {
    private String id;
    private String standbyOperate;
    private String rxTX;
    private String memoryBank;
    private String input;
    private String selectedBand;
    private String txAntenna;
    private String rxAntenna;
    private String powerLevel;
    private String outputPower;
    private String swrATU;
    private String swrANT;
    private String vPa;
    private String iPA;
    private String temperatureUPR;
    private String temperatureLWR;
    private String temperatureCMB;
    private String warnings;
    private String alarms;
    private boolean hasError;
    private String errorMessage;
}
