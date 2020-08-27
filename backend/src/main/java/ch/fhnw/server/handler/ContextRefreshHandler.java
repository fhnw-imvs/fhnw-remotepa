// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.handler;

import ch.fhnw.server.service.SocketService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

/**
 * Class Context refresh handler.
 */
// Based on https://stackoverflow.com/questions/48406465/spring-send-message-to-websocket-on-event/48407985 licensed under CC BY-SA 4.0
@Component
public class ContextRefreshHandler implements ApplicationListener<ContextRefreshedEvent> {
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private SimpMessagingTemplate template;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        try {
            //Initialize the template for web socket messages
            SocketService.setTemplate(template);
        } catch (Exception ex) {
            log.error(getClass().getName(), ex);
        }
    }
}
