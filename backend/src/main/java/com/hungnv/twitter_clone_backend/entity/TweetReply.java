package com.hungnv.twitter_clone_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@EntityListeners(AuditingEntityListener.class)
public class TweetReply {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String content;

    @CreatedDate
    @Column(updatable = false)
    private LocalDate createdDate;

    @UpdateTimestamp
    private LocalDate updatedDate;


    @ManyToOne
    @JoinColumn(name = "tweet_id")
    private Tweet tweetId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User createdby;
}
