package com.capstone.winfo.repos;

import com.capstone.winfo.domain.posting.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepo extends CrudRepository<Post, Long> {
    List<Post> findAll();
    Post findById(long id);
    void deleteById(long id);
    List<Post> findByTitleContaining(String title);
    List<Post> findByDescriptionContaining(String description);

    List<Post> findAllByLanguage(String language);
}
