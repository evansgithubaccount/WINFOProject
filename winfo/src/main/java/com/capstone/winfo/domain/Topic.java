package com.capstone.winfo.domain;

import com.capstone.winfo.domain.posting.Post;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String topicName;

    private String language;

    @ElementCollection
    @OneToMany(fetch = FetchType.LAZY, mappedBy="topic")
    private List<Post> posts = new ArrayList<>();
}
