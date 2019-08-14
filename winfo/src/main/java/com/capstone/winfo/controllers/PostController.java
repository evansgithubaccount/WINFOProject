package com.capstone.winfo.controllers;


import com.capstone.winfo.domain.posting.Post;
import com.capstone.winfo.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping("/allPosts")
    public List<Post> getAllPosts(){
        return postService.getAllPosts();
    }

    @PostMapping("/addPost/{title}/{description}")
    public ResponseEntity<?> addPost(@PathVariable("title") String title, @PathVariable("description") String description) {
        Post post = Post.builder().title(title).description(description).build();
        postService.addPost(post);
        return new ResponseEntity("Post added successfully", HttpStatus.OK);
    }

    @DeleteMapping("/deletePost/{id}")
    public ResponseEntity<?> deletePost(@PathVariable("id") Long id){
        postService.deletePost(id);
        return new ResponseEntity("Post successfully deleted", HttpStatus.OK);
    }
}
