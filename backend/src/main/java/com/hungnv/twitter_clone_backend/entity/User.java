package com.hungnv.twitter_clone_backend.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
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
	private LocalDate createdDate;

}
