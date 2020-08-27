// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.service;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertTrue;

// Based on https://stackoverflow.com/questions/5466462/spring-3-inject-default-bean-unless-another-bean-present/32318029 licensed under MIT
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = { DisplayService.class})
public class IDisplayServiceTest {

    @Autowired
    private IDisplayService displayService;

    @Test
    public void test() {
        assertTrue(displayService instanceof DisplayService);
    }
}
