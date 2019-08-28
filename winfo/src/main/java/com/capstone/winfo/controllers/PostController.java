package com.capstone.winfo.controllers;


import com.capstone.winfo.domain.User;
import com.capstone.winfo.domain.posting.Post;
import com.capstone.winfo.services.PostService;
import com.capstone.winfo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @GetMapping("/allPosts")
    public List<Post> getAllPosts(){
        return postService.getAllPosts();
    }

    @PostMapping("/addPost/{title}/{description}/{url}/{language}/{type}/{userID}")
    public ResponseEntity<?> addPost(@PathVariable("title") String title, @PathVariable("description") String description, @PathVariable("url") String url, @PathVariable("userID") Long userID, @PathVariable("type") String type, @PathVariable("language") String language) {
        User user = userService.findById(userID);
        Post post = Post.builder().title(title).description(description).url(url).language(language).uploader(user).type(type).build();
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
            case "UPLOADER": post.setUploader(userService.findById(Long.parseLong(value)));break;
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

    @GetMapping("/posts/lang/{language}")
    public List<Post> postByLang(@PathVariable("language") String language){
        if(language != null){
            return postService.getPostsByLanguage(language);
        }
        return  null;
    }

    @GetMapping("/search/{query}")
    public List<Post> search(@PathVariable("query") String query){
        return postService.searchByTitleOrDescription(query);
    }
}