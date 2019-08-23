package com.capstone.winfo.repos;

import com.capstone.winfo.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {
    User findUserByUsername(String username);
    List<User> findAll();
    User findById(long id);
    void deleteById(long id);
    boolean existsByUsername(String username);
}
