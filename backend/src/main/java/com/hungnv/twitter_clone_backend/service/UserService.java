package com.hungnv.twitter_clone_backend.service;

import com.hungnv.twitter_clone_backend.dto.request.UserUpdateRequest;
import com.hungnv.twitter_clone_backend.exception.AppException;
import com.hungnv.twitter_clone_backend.exception.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hungnv.twitter_clone_backend.dto.request.UserCreationRequest;
import com.hungnv.twitter_clone_backend.entity.User;
import com.hungnv.twitter_clone_backend.repository.UserRepository;

import javax.management.RuntimeErrorException;
import java.time.LocalDate;
import java.util.List;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

	public User createUser(UserCreationRequest request) {
		if(userRepository.existsByEmail(request.getEmail())){
			throw new AppException(ErrorCode.EMAIL_EXISTED);
		}

		User user = new User();
		user.setUsername(request.getUsername());
		user.setFirstName(null);
		user.setLastName(null);
		user.setPassword(request.getPassword());
		user.setEmail(request.getEmail());
		user.setDob(null);
		user.setPhoneNumber(null);
		user.setCreatedDate(LocalDate.now());

		return userRepository.save(user);
	}

	public List<User> getUsers(){
		return userRepository.findAll();
	}

	public User getUser(String userId){
		return userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found!"));
	}

	public User updateUser(String userId, UserUpdateRequest request){
		User user = getUser(userId);
		user.setFirstName(request.getFirstName());
		user.setLastName(request.getLastName());
		user.setUsername(request.getUsername());
		user.setPassword(request.getPassword());
		user.setPhoneNumber(request.getPhoneNumber());
		user.setDob(request.getDob());
		user.setEmail(request.getEmail());
		return userRepository.save(user);
	}

	public void deleteUser(String userId){
		userRepository.deleteById(userId);
	}

}
