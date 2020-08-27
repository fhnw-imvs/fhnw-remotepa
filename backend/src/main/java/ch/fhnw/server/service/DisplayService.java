// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.service;

import ch.fhnw.server.comPort.IComPortDriver;
import ch.fhnw.server.response.DisplayResponse;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

/**
 * Class Display service.
 * Just a dummy class, if you want the full implementation you need the class "DisplayExtendedService.java".
 */
@Service
// Based on https://stackoverflow.com/questions/5466462/spring-3-inject-default-bean-unless-another-bean-present/32318029 licensed under MIT
@ConditionalOnMissingBean(IDisplayExtendedService.class)
public class DisplayService implements IDisplayService {

    private final DisplayResponse origDisplay = new DisplayResponse();

    /**
     * Instantiates a new Display service.
     *
     */
    public DisplayService() {
        createDummy();
    }

    public Mono<DisplayResponse> getData() {
        return Mono.just(origDisplay);
    }

    public void updateData(){
        //DoNothing
    }

    private void createDummy(){
        origDisplay.setLed(new char[8]);
        origDisplay.setLine1(new char[40]);
        origDisplay.setLine2(new char[40]);
        origDisplay.setLine3(new char[40]);
        origDisplay.setLine4(new char[40]);
        origDisplay.setLine5(new char[40]);
        origDisplay.setLine6(new char[40]);
        origDisplay.setLine7(new char[40]);
        origDisplay.setLine8(new char[40]);
        origDisplay.setSelected(new String[40]);
    }

    /**
     * Method to set the comPortDriver
     *
     * @param comPortDriver set the comPortDrive to communicate with expert
     */
    @Override
    public void setComPortDriver(IComPortDriver comPortDriver) {
    }
}
