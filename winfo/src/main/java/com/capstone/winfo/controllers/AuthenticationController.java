package com.capstone.winfo.controllers;

import com.capstone.winfo.domain.User;
import com.capstone.winfo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
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

    private ClientRegistration registration;

    public AuthenticationController (ClientRegistrationRepository registration){
        this.registration = registration.findByRegistrationId("okta");
    }

    @GetMapping("/api/user")
    public ResponseEntity<?> getUser(@AuthenticationPrincipal OAuth2User user){
        if(user == null){
            return new ResponseEntity<>("", HttpStatus.OK);
        }else {
            return ResponseEntity.ok().body(user.getAttributes());
        }
    }

    @PostMapping("/api/logout")
    public ResponseEntity<?> logout(HttpServletRequest request, @AuthenticationPrincipal(expression="idToken") OidcIdToken idToken){
        String logoutUrl = this.registration.getProviderDetails()
                .getConfigurationMetadata().get("end_session_endpoint").toString();

        Map<String, String> logoutDetails = new HashMap<>();
        logoutDetails.put("logoutUrl", logoutUrl);
        logoutDetails.put("idToken", idToken.getTokenValue());
        request.getSession(false).invalidate();
        return ResponseEntity.ok().body(logoutDetails);
    }

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
