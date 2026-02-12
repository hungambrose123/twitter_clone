package com.hungnv.twitter_clone_backend.entity;

import com.hungnv.twitter_clone_backend.enums.TargetType;
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
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private long targetId;

    @Enumerated(EnumType.STRING)
    private TargetType targetType;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User likedBy;
}
