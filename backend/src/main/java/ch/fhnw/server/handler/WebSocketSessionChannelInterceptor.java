// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.handler;

import ch.fhnw.server.constants.ERROR_MESSAGES;
import ch.fhnw.server.security.JwtTokenProvider;
import ch.fhnw.server.service.SocketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.util.MultiValueMap;

import java.util.Objects;

/**
 * Class Web socket session channel interceptor.
 */
public class WebSocketSessionChannelInterceptor implements ChannelInterceptor {

    @Value("${jwt.header}")
    private String tokenHeader;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {

        MessageHeaders headers = message.getHeaders();
        MultiValueMap<String, String> multiValueMap = headers.get(StompHeaderAccessor.NATIVE_HEADERS, MultiValueMap.class);

        String simpMessageType = Objects.requireNonNull(message.getHeaders()
                .get("simpMessageType"))
                .toString();
        if("DISCONNECT".equals(simpMessageType) || "HEARTBEAT".equals(simpMessageType)){
            return message;
        }

        try{
            assert multiValueMap != null;
            String requestHeader = multiValueMap.get(tokenHeader).get(0);

            if (requestHeader != null && requestHeader.startsWith("Bearer ")) {
                String  authToken = requestHeader.split(" ")[1];
                if(jwtTokenProvider.validateToken(authToken).get()){
                    return message;
                }
            }
        } catch (Exception e){
            notAuthorizedMessage(ERROR_MESSAGES.TOKEN_INVALID.getErrorMessage());
            return null;
        }
        notAuthorizedMessage(ERROR_MESSAGES.TOKEN_INVALID.getErrorMessage());
        return null;
    }

    private void notAuthorizedMessage(String tokenError){
        SocketService.sendTokenError(tokenError);
    }
}
