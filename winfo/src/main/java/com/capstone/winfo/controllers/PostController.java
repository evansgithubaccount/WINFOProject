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

    @PostMapping("/addPost/{title}/{description}/{url}")
    public ResponseEntity<?> addPost(@PathVariable("title") String title, @PathVariable("description") String description, @PathVariable("url") String url) {
        Post post = Post.builder().title(title).description(description).url(url).build();
        postService.savePost(post);
        return new ResponseEntity("Post added successfully", HttpStatus.OK);
    }

    @PutMapping("/editPost/{id}/{field}/{value}")
    public ResponseEntity<?> editPost(@PathVariable("id") Long id, @PathVariable("field") String field, @PathVariable("value") String value){
        Post post = postService.findById(id);
        if(value.equals("clear_empty"))value=null;

        switch(field.toUpperCase()){
            case "TITLE": post.setTitle(value);break;
            case "DESCRIPTION": post.setDescription(value);break;
            case "PROBLEMSTATEMENT": post.setProblemStatement(value);break;
            case "SAVENUM": post.setSaveNum(post.getSaveNum()+1);break;
            default: return new ResponseEntity("Invalid Field Entered", HttpStatus.OK);
        }

        postService.savePost(post);

        return new ResponseEntity("Post edited successfully", HttpStatus.OK);
    }

    @DeleteMapping("/deletePost/{id}")
    public ResponseEntity<?> deletePost(@PathVariable("id") Long id){
        postService.deletePost(id);
        return new ResponseEntity("Post successfully deleted", HttpStatus.OK);
    }
}