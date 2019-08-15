package com.capstone.winfo.domain.posting;

import com.capstone.winfo.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    private String description;

    private String language;

    private String topic;

    private String subTopic;

    @NotNull
    private String url;

    @ElementCollection
    @Builder.Default
    private List<String> keywords = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User uploader;

    private Date uploadDate;

    private String problemStatement;

    private int saveNum;

    private int likeNum;

}
