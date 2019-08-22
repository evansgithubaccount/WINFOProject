package com.capstone.winfo.controllers;

import com.capstone.winfo.domain.User;
import com.capstone.winfo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@Controller
@CrossOrigin
class AuthenticationController {
    @Autowired
    private UserService userService;


    @GetMapping("/signin")
    public String login() {
        return "signin";
    }

    @PostMapping("/signup/{username}/{password}")
    @CrossOrigin
    public void firstSignin(@PathVariable("username") String username, @PathVariable("password") String password, BindingResult bindingResult, HttpServletRequest request) throws ServletException{
        User user = User.builder().username(username).password(password).build();
        this.singup(user,"up", bindingResult, request);
    }

    @PostMapping("/signin")
    public void singup(@Valid User user,
                         @RequestParam String submit,
                         BindingResult bindingResult,
                         HttpServletRequest request) throws ServletException {
        String password = user.getPassword();
        if(submit.equals("up")) {
            if(userService.findByUsername(user.getUsername()) == null) {
                userService.addUser(user);
            } else {
                bindingResult.rejectValue("username", "error.user", "Username is already taken.");
                return;
            }
        }
        request.login(user.getUsername(), password);
    }
}
