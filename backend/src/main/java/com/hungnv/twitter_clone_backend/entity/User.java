package com.hungnv.twitter_clone_backend.entity;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Data
@EntityListeners(AuditingEntityListener.class)
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Size(min = 5, message = "USERNAME_INVALID")
	private String username;
	@Size(min = 6, message = "PASSWORD_INVALID")
	private String password;
	private String firstName;
	private String lastName;
	private String email;
	private LocalDate dob;
	private String phoneNumber;
	private String avatarImage;
	private String backgroundImage;

	@CreatedDate
	@Column(updatable = false)
	private LocalDate createdDate;


	// relations
	@OneToMany(mappedBy = "createdBy", cascade = CascadeType.ALL)
	private List<Tweet> tweets;

	@OneToMany(mappedBy = "receiverId", cascade = CascadeType.ALL)
	private List<Notification> notifications;

	@OneToMany(mappedBy = "follower", cascade = CascadeType.ALL)
	private List<Follow> followingList;

	@OneToMany(mappedBy = "followed", cascade = CascadeType.ALL)
	private List<Follow> followedlist;

	@OneToMany(mappedBy = "bookmarkedBy", cascade = CascadeType.ALL)
	private List<Bookmark> bookmarks;

}
