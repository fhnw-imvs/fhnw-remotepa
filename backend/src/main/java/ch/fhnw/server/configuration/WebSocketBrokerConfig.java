// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.configuration;

import ch.fhnw.server.constants.WS_API;
import ch.fhnw.server.handler.WebSocketSessionChannelInterceptor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;


/**
 * The type Web socket broker config.
 */
// Based on https://stackoverflow.com/questions/60590670/unable-to-get-the-response-from-convertandsendtouser-stomp-websocket-sprin licensed under MIT
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketBrokerConfig implements WebSocketMessageBrokerConfigurer {

    /**
     * Sets heartbeat from server to 5 sec.
     */
    @Value("${websocket.heartbeat.server}")
    private long heartbeatServer;

    /**
     * Sets the expected heartbeat from client to 5 sec.
     */
    @Value("${websocket.heartbeat.client}")
    private long heartbeatClient;


    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint(WS_API.HANDSHAKE)
                .setAllowedOrigins("*");
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        ThreadPoolTaskScheduler threadPoolTaskScheduler = new ThreadPoolTaskScheduler();
        threadPoolTaskScheduler.setPoolSize(2);
        threadPoolTaskScheduler.setThreadNamePrefix("wss-heartbeat-thread-");
        threadPoolTaskScheduler.initialize();

        config.enableSimpleBroker(WS_API.TOPIC_DESTINATION_PREFIX)
                .setHeartbeatValue(new long[]{heartbeatServer, heartbeatClient})
                .setTaskScheduler(threadPoolTaskScheduler);
        config.setApplicationDestinationPrefixes(WS_API.APP_PREFIX);
    }

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(webSocketSessionChannelInterceptor());
    }


    /**
     * Web socket session channel interceptor web socket session channel interceptor.
     * Sets our own interceptor to configure the websocket flow.
     *
     * @return the web socket session channel interceptor
     */
    @Bean
    public WebSocketSessionChannelInterceptor webSocketSessionChannelInterceptor() {
        return new WebSocketSessionChannelInterceptor();
    }


}





