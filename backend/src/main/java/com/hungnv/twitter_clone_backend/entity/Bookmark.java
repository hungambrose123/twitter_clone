package com.hungnv.twitter_clone_backend.entity;

import java.time.LocalDate;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Data
@EntityListeners(AuditingEntityListener.class)
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    @JoinColumn(name = "tweet_id")
    private Tweet tweetId;

    @CreatedDate
    @Column(updatable = false)
    private LocalDate createdDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User bookmarkedBy;
}
