package com.capstone.winfo.domain;

import com.capstone.winfo.domain.posting.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String username;
    @NotNull
    private String password;
    private Boolean admin;
    private String profilePic;

    @Builder.Default
    @ElementCollection
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "uploader")
    private List<Post> uploads = new ArrayList<>();

    @Builder.Default
    @ElementCollection
    private List<String> strengths = new ArrayList<>();

    @Builder.Default
    @ElementCollection
    private List<Post> savedPosts = new ArrayList<>();

    @Transient
    private boolean accountNonExpired = true;
    @Transient
    private boolean accountNonLocked = true;
    @Transient
    private boolean credentialsNonExpired = true;
    @Transient
    private boolean enabled = true;
    @Transient
    private Collection<GrantedAuthority> authorities = null;
}
