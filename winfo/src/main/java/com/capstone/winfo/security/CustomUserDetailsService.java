package com.capstone.winfo.security;

import com.capstone.winfo.domain.User;
import com.capstone.winfo.repos.UserRepo;
import com.capstone.winfo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    UserRepo userRepo;

    public UserDetails loadUserByUsername(String username){
        User user = userRepo.findUserByUsername(username);
        return UserPrincipal.create(user);
    }

    public UserDetails loadUserById(long id){
        User user = userRepo.findById(id);
        return UserPrincipal.create(user);
    }
}
