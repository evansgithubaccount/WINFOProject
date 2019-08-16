package com.capstone.winfo.services;

import com.capstone.winfo.domain.User;
import com.capstone.winfo.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserDetailsService {

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

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = findByUsername(username);
        if(user == null) throw new UsernameNotFoundException("Username not found.");
        return user;
    }

    public void save(User user){ userRepo.save(user);}

}
