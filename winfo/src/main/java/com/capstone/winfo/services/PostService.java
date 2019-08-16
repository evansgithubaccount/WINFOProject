package com.capstone.winfo.services;

import com.capstone.winfo.domain.posting.Post;
import com.capstone.winfo.repos.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepo postRepo;

    public List<Post> getAllPosts(){
        return postRepo.findAll();
    }

    public void savePost(Post post){
        postRepo.save(post);
    }

    public Post findById(long id){
        return postRepo.findById(id);
    }

    public void deletePost(long id){
        postRepo.deleteById(id);
    }
}
