package com.capstone.winfo.domain;

import com.capstone.winfo.domain.posting.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
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

    @Column(name = "edit_user")
    boolean edit = false;
}
