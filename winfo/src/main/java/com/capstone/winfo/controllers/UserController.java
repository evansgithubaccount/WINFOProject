package com.capstone.winfo.controllers;

import com.capstone.winfo.domain.User;
import com.capstone.winfo.domain.posting.Post;
import com.capstone.winfo.services.PostService;
import com.capstone.winfo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private PostService postService;

    @GetMapping("/users")
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
    public ResponseEntity<?> deleteUSer(@PathVariable("id") Long id) {
        userService.deleteUser(id);
        return new ResponseEntity("User deleted successfully", HttpStatus.OK);
    }

    @PutMapping("/users/{id}/addUpload/{postID}")
    public ResponseEntity<?> addUserPost(@PathVariable("id") Long id, @PathVariable("postID") Long postID){
        User user = userService.findById(id);
        user.addUpload(postService.findById(postID));
        userService.save(user);
        return new ResponseEntity("User upload added successfully", HttpStatus.OK);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> editUser(@PathVariable Long id, Model model) {
        clearEdit();
        List<User> userList = userService.findAll();
        model.addAttribute("users", userList);
        User user = userService.findById(id);
        user.setEdit(true);
        userService.save(user);
        model.addAttribute("editUser", user);
        return new ResponseEntity("user updated successfully", HttpStatus.OK);
    }

    @PostMapping("/users/{id}")
    public ResponseEntity<?> saveEdit(User user){
     user.setEdit(false);
     userService.save(user);
     return new ResponseEntity("user saved successfully", HttpStatus.OK) ;
        }

     private void clearEdit(){
     List<User> users = userService.findAll();
     for (User user : users){
     user.setEdit(false);
     userService.save(user);
            }
        }

    }
