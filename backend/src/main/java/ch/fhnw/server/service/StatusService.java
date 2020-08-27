// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.service;

import ch.fhnw.server.comPort.IComPortDriver;
import ch.fhnw.server.response.StatusResponse;
import ch.fhnw.server.constants.ERROR_MESSAGES;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.HashMap;

/**
 * Class Status service.
 */
@Service
public class StatusService implements IStatusService{
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    private static final HashMap<String, String> MAP_BAND = new HashMap<>();
    private static final HashMap<String, String> MAP_WARNING = new HashMap<>();
    private static final HashMap<String, String> MAP_ERROR = new HashMap<>();
    private static final HashMap<String, String> MAP_POWERLEVEL = new HashMap<>();

    private IComPortDriver comPortDriver;

    private HashMap<String, Byte> commandMap;

    private String oldStringStatus;
    private String newStringStatus;
    private StatusResponse statusResponse;


    /**
     * Instantiates a new Status service.
     *
     */
    public StatusService() {
        oldStringStatus = " ";
        newStringStatus = " ";
        statusResponse = new StatusResponse();

        initializeCommandMap();
        initializeMapBand();
        initializeMapWarning();
        initializeMapError();
        initializeMapPowerLevel();
    }

    @Override
    public Mono<StatusResponse> getData() {
        return Mono.just(statusResponse);
    }

    @Override
    public void updateData() {
        byte command = (byte) 0x90;
        byte[] status = comPortDriver.writeReadToSerial(command, 76);

        if (status != null) {
            newStringStatus = decodeStatus(status);
        }

        if (!oldStringStatus.equals(newStringStatus)) {
            oldStringStatus = newStringStatus;
            statusResponse = convertToStatusObject();
            SocketService.sendStatus(statusResponse);
        }
    }

    // Based on https://github.com/sfera-labs/sfera-driver-speexpert/blob/master/src/main/java/cc/sferalabs/sfera/drivers/speexpert/SpeExpert.java licensed under GNU LESSER GENERAL PUBLIC LICENSE
    @Override
    public Mono<StatusResponse> sendCommand(String command) {
        if ("on".equals(command)) {
            this.comPortDriver.powerOnExpert();
        } else if (commandMap.containsKey(command)) {
            byte commandKey = commandMap.get(command);
            byte[] status = comPortDriver.writeReadToSerial(commandKey, 6);

            if (status == null) {
                log.error(ERROR_MESSAGES.COMPORT_NOT_CONNECTED.getErrorMessage());
            } else if(status != null){
                if (status[0] == (byte) 0xaa && status[1] == (byte) 0xaa && status[2] == (byte) 0xaa && status[4] == commandKey) {
                    updateData();
                } else {
                    log.error(ERROR_MESSAGES.COMMUNICATION_ERROR.getErrorMessage());
                }
            }


        } else {
            log.error(ERROR_MESSAGES.COMMAND_NOT_FOUND.getErrorMessage());
        }
        return this.getData();
    }


    // Based on https://github.com/sfera-labs/sfera-driver-speexpert/blob/master/src/main/java/cc/sferalabs/sfera/drivers/speexpert/SpeExpert.java licensed under GNU LESSER GENERAL PUBLIC LICENSE
    private String decodeStatus(byte[] data) {
        StringBuilder stringBuilder = new StringBuilder();

        try {
            if (data[0] != (byte) 0xaa || data[1] != (byte) 0xaa || data[2] != (byte) 0xaa || data[3] != (byte) 0x43) {
                return ERROR_MESSAGES.COMMUNICATION_ERROR.getErrorMessage();
            }

            for (int i = 5; i < 70; i++) {
                stringBuilder.append((char) data[i]);
            }

            return stringBuilder.toString();

        } catch (Exception e) {
            return ERROR_MESSAGES.DECODING_ERROR.getErrorMessage();
        }
    }


    private StatusResponse convertToStatusObject() {

        if (oldStringStatus.length() <= 1) {
            return statusResponse;
        }

        try {
            String[] s = oldStringStatus.split(",");
            if (!"Error".equals(s[0]) && s.length >= 19) {
                statusResponse.setHasError(false);
                statusResponse.setErrorMessage("");
                statusResponse.setId(s[0]);
                statusResponse.setStandbyOperate(s[1]);
                statusResponse.setRxTX(s[2]);
                statusResponse.setMemoryBank(s[3]);
                statusResponse.setInput(s[4]);
                statusResponse.setSelectedBand(checkMap(MAP_BAND, s[5]).concat(" M")); //Kein Check notwendig ob Band korrekt oder nicht!
                statusResponse.setTxAntenna(s[6].toUpperCase());
                statusResponse.setRxAntenna(s[7]);
                statusResponse.setPowerLevel(checkMap(MAP_POWERLEVEL, s[8]));
                statusResponse.setOutputPower(s[9].concat(" W"));
                statusResponse.setSwrATU(s[10]);
                statusResponse.setSwrANT(s[11]);
                statusResponse.setVPa(s[12]);
                statusResponse.setIPA(s[13].concat(" A"));
                statusResponse.setTemperatureUPR(s[14].concat(" °C"));
                statusResponse.setTemperatureLWR(s[15]);
                statusResponse.setTemperatureCMB(s[16]);
                statusResponse.setWarnings(checkMap(MAP_WARNING, s[17]));
                statusResponse.setAlarms(checkMap(MAP_ERROR, s[18]));
            } else {
                statusResponse.setHasError(true);
                statusResponse.setErrorMessage(s[1].trim());
                log.info(statusResponse.getErrorMessage());
            }
        } catch (Exception e) {
            log.error(ERROR_MESSAGES.CONVERT_TO_OBJECT_FAILED.getErrorMessage());
        }
        return statusResponse;
    }

    private String checkMap(HashMap<String, String> map, String key) {
        if (map.containsKey(key)) {
            return map.get(key);
        }
        return "";
    }

    private void initializeCommandMap() {
        commandMap = new HashMap<>();
        commandMap.put("input", (byte) 0x01);
        commandMap.put("band-minus", (byte) 0x02);
        commandMap.put("band-plus", (byte) 0x03);
        commandMap.put("antenna", (byte) 0x04);
        commandMap.put("l-minus", (byte) 0x05);
        commandMap.put("l-plus", (byte) 0x06);
        commandMap.put("c-minus", (byte) 0x07);
        commandMap.put("c-plus", (byte) 0x08);
        commandMap.put("tune", (byte) 0x09);
        commandMap.put("off", (byte) 0x0a);
        commandMap.put("on", (byte) 0x99);
        commandMap.put("power", (byte) 0x0b);
        commandMap.put("display", (byte) 0x0c);
        commandMap.put("operate", (byte) 0x0d);
        commandMap.put("cat", (byte) 0x0e);
        commandMap.put("left", (byte) 0x0f);
        commandMap.put("right", (byte) 0x10);
        commandMap.put("set", (byte) 0x11);
    }

    private void initializeMapBand() {
        MAP_BAND.put("00", "160");
        MAP_BAND.put("01", "80");
        MAP_BAND.put("02", "60");
        MAP_BAND.put("03", "40");
        MAP_BAND.put("04", "30");
        MAP_BAND.put("05", "20");
        MAP_BAND.put("06", "17");
        MAP_BAND.put("07", "15");
        MAP_BAND.put("08", "12");
        MAP_BAND.put("09", "10");
        MAP_BAND.put("10", "6");
        MAP_BAND.put("11", "4");
    }

    private void initializeMapWarning() {
        MAP_WARNING.put("M", "ALARM AMPLIFIER");
        MAP_WARNING.put("A", "NO SELECTED ANTENNA");
        MAP_WARNING.put("S", "SWR ANTENNA");
        MAP_WARNING.put("B", "NO VALID BAND");
        MAP_WARNING.put("P", "POWER LIMIT EXCEEDED");
        MAP_WARNING.put("O", "OVERHEATING");
        MAP_WARNING.put("Y", "ATU NOT AVAILABLE");
        MAP_WARNING.put("W", "TUNING WITH NO POWER");
        MAP_WARNING.put("K", "ATU BYPASSED");
        MAP_WARNING.put("R", "POWER SWITCH HELD BY REMOTE");
        MAP_WARNING.put("T", "COMBINER OVERHEATING");
        MAP_WARNING.put("C", "COMBINER FAULT");
        MAP_WARNING.put("N", "");
    }

    private void initializeMapError() {
        MAP_ERROR.put("S", "SWR EXCEEDING LIMITS");
        MAP_ERROR.put("A", "AMPLIFIER PROTECTION");
        MAP_ERROR.put("D", "INPUT OVERDRIVING");
        MAP_ERROR.put("H", "EXCESS OVERHEATING");
        MAP_ERROR.put("C", "COMBINER FAULT");
        MAP_ERROR.put("N", "");
    }

    private void initializeMapPowerLevel() {
        MAP_POWERLEVEL.put("L", "LOW");
        MAP_POWERLEVEL.put("M", "MID");
        MAP_POWERLEVEL.put("H", "HIGH");
    }

    /**
     * Method to set the comPortDriver
     *
     * @param comPortDriver set the comPortDrive to communicate with expert
     */
    public void setComPortDriver(IComPortDriver comPortDriver) {
        this.comPortDriver = comPortDriver;
    }
}
