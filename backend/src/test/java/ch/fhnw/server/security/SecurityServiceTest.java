// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.security;

import ch.fhnw.server.request.AuthenticationRequest;
import ch.fhnw.server.response.JWTTokenResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import reactor.core.publisher.Mono;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

// Based on https://stackoverflow.com/questions/45241566/spring-boot-unit-tests-with-jwt-token-security licensed under MIT
@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
public class SecurityServiceTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private JwtAuthenticationService jwtAuthenticationService;

    @Test
    public void shouldNotAllowAccessForUnauthenticatedUsersToStatus() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/api/rest/status"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void shouldNotAllowAccessForUnauthenticatedUsersToDisplay() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/api/rest/display"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void shouldNotAllowAccessForUnauthenticatedUsersToProfile() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/api/rest/profile"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void shouldAllowAccessForUnauthenticatedUsersToLoginPage() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/login"))
                .andExpect(status().is3xxRedirection());
    }

    @Test
    public void shouldAllowAccessForUnauthenticatedUsersToPostLoginPage() throws Exception {
        AuthenticationRequest request = new AuthenticationRequest();
        request.setUsername("admin");
        request.setPassword("admin");

        mvc.perform(MockMvcRequestBuilders.post("/api/rest/login")
                .content(asJsonString(request))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void shouldAllowAccessForUnauthenticatedUsersToErrorPage() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/test"))
                .andExpect(status().isNotFound());
    }

    @Test
    public void shouldGenerateAuthToken() throws Exception {
        Mono<JWTTokenResponse> token = jwtAuthenticationService.generateJWTToken("admin", "admin");

        assertNotNull(token);
        mvc.perform(MockMvcRequestBuilders.get("/api/rest/status")
                .header("X-Authorization", "Bearer " + Objects.requireNonNull(token.block())
                        .getToken()))
                .andExpect(status().isOk());
    }


    private static String asJsonString(final Object obj) {
        try {
            final ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
