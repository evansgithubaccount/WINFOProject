package com.capstone.winfo.services;

import com.capstone.winfo.domain.User;
import com.capstone.winfo.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public User findByUsername(String username){
        return userRepo.findUserByUsername(username);
    }

    public List<User> findAll(){
        return userRepo.findAll();
    }

    public void addUser(User user){
        userRepo.save(user);
    }

    public void deleteUser(long id){
        userRepo.deleteById(id);
    }

    public User findById(long id){
        return userRepo.findById(id);
    }

    public void save(User user){ userRepo.save(user);}

}
