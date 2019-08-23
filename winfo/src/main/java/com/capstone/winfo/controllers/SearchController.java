package com.capstone.winfo.controllers;

import com.capstone.winfo.domain.posting.Post;
import com.capstone.winfo.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SearchController {
    @Autowired
    PostService postService;

    @GetMapping(value= "/search/{param}")
    public List<Post> Search(@PathVariable("param") String param){
        if(param != null){
            List<Post> posts = postService.searchByTitleOrDescription(param);
            return posts;
        }
        return null;
    }



}
