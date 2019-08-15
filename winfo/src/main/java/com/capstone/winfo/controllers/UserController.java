package com.capstone.winfo.controllers;

import com.capstone.winfo.domain.User;
import com.capstone.winfo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/allUsers")
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @PostMapping("/addUser/{username}/{password}")
    public ResponseEntity<?> addUser(@PathVariable("username") String username, @PathVariable("password") String password) {
        User user = User.builder().username(username).password(password).build();
        userService.addUser(user);
        return new ResponseEntity("User added successfully", HttpStatus.OK);
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<?> deleteUSer(@PathVariable("id") Long id){
        userService.deleteUser(id);
        return new ResponseEntity("User deleted successfully", HttpStatus.OK);
    }
}
