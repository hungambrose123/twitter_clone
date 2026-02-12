package com.hungnv.twitter_clone_backend.dto.request;

import lombok.Data;

import java.time.LocalDate;

@Data
public class UserUpdateRequest {
	private String username;
	private String password;
	private String firstName;
	private String lastName;
	private String email;
	private LocalDate dob;
	private String phoneNumber;
}
