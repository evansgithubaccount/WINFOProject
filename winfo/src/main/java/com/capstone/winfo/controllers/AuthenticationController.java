package com.capstone.winfo.controllers;

import com.capstone.winfo.domain.User;
import com.capstone.winfo.domain.auth.ApiResponse;
import com.capstone.winfo.domain.auth.JwtAuthenticationResponse;
import com.capstone.winfo.domain.auth.LoginRequest;
import com.capstone.winfo.domain.auth.SignUpRequest;
import com.capstone.winfo.security.JwtTokenProvider;
import com.capstone.winfo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.net.URI;

@Controller
@CrossOrigin
@RequestMapping("/api/auth")
class AuthenticationController {
    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;


    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest){
        if(userService.existsByUsername(signUpRequest.getUsername())){
            return new ResponseEntity(new ApiResponse(false, "Username is already taken!"), HttpStatus.BAD_REQUEST);
        }

        User user = User.builder()
                .username(signUpRequest.getUsername())
                .password(signUpRequest.getPassword()).build();

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userService.save(user);

        URI location = ServletUriComponentsBuilder
                            .fromCurrentContextPath().path("/users/{username}")
                            .buildAndExpand(user.getUsername()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
    }


    @PostMapping("/signin")
    public ResponseEntity<?> authenticatedUser(@Valid @RequestBody LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }
}
