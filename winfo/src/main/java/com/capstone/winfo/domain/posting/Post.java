package com.capstone.winfo.domain.posting;

import com.capstone.winfo.domain.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String title;

    @NotNull
    private String type;

    private String description;

    private String language;

    private String topic;

    private String subTopic;

    @NotNull
    private String url;

    @ElementCollection
    @Builder.Default
    private List<String> keywords = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonBackReference
    private User uploader;

    @CreationTimestamp
    private Date uploadDate;

    private String problemStatement;

    @Builder.Default
    private int saveNum = 0;

    @Builder.Default
    private int likeNum = 0;

}
