package com.capstone.winfo.domain;

import com.capstone.winfo.domain.posting.Post;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.*;

@Data
@ToString(exclude = "password")
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

    private String name;

    @NotNull
    //@JsonIgnore
    @Size(max=100)
    private String password;

    @Builder.Default
    private Boolean admin = false;

    private String profilePic;

    @Builder.Default
    @ElementCollection
    @OneToMany(fetch = FetchType.LAZY, mappedBy="uploader")
    @JsonManagedReference
    private List<Post> uploads = new ArrayList<>();

    @Builder.Default
    @ElementCollection
    private List<String> strengths = new ArrayList<>();

    @Builder.Default
    @ElementCollection
    private List<Post> savedPosts = new ArrayList<>();

    @Builder.Default
    @ElementCollection
    @OneToMany(fetch = FetchType.LAZY, mappedBy="user")
    @JsonManagedReference
    private List<UserProject> userProjects = new ArrayList<>();

    @Builder.Default
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name="user_id"),
            inverseJoinColumns = @JoinColumn(name="role_id"))
    private Set<Role> roles = new HashSet<>();

    @Transient
    private boolean accountNonExpired = true;
    @Transient
    private boolean accountNonLocked = true;
    @Transient
    private boolean credentialsNonExpired = true;
    @Transient
    private boolean enabled = true;
//    @Transient
//    private Collection<GrantedAuthority> authorities = null;

    @Column(name = "edit_user")
    boolean edit = false;

    public void addUpload(Post post){
        uploads.add(post);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }
}
