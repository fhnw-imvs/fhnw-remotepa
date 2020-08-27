// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
package ch.fhnw.server.controller;

import ch.fhnw.server.constants.HTTP_API;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Class Home controller.
 */
@Controller
@RequestMapping(value={HTTP_API.TOPIC_REDIRECT_LOGIN, HTTP_API.TOPIC_REDIRECT_PROFILE})
public class HomeController {

    /**
     * Method to handle page refresh from page /login or /profile.
     *
     * @return redirects to "/"
     */
    @GetMapping
    public String index(){
        return "redirect:/";
    }
}
