package com.hungnv.twitter_clone_backend.dto.request;

import java.time.LocalDate;

import lombok.Data;

@Data
public class UserCreationRequest {
	private String username;
	private String password;
	private String firstName;
	private String lastName;
	private String email;
	private LocalDate dob;
	private String phoneNumber;
	private LocalDate createdDate;
}
