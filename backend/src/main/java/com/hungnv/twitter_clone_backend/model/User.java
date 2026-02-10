package com.hungnv.twitter_clone_backend.model;

import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String username;
	private String location;
	private String website;
	private Timestamp birthDate;
	private String email;
	private String password;
	private String mobile;
	private String avatarImage;
	private String backgroundImage;
	private String biography;
	private boolean subscription;
	private boolean registerWithGoogle;

//	@JsonIgnore
//	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
//	private List<Tweet> tweet = new ArrayList<>();

}
