package com.hungnv.twitter_clone_backend.service;

import com.hungnv.twitter_clone_backend.dto.request.UserUpdateRequest;
import com.hungnv.twitter_clone_backend.dto.response.UserResponse;
import com.hungnv.twitter_clone_backend.mapper.UserMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.hungnv.twitter_clone_backend.dto.request.UserCreationRequest;
import com.hungnv.twitter_clone_backend.entity.User;
import com.hungnv.twitter_clone_backend.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final UserMapper userMapper;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.userMapper = userMapper;
    }


    public UserResponse createUser(UserCreationRequest request) {
		if (userRepository.existsByEmail(request.getEmail())) {
			throw new RuntimeException("Email is already taken");
		}
		User user = userMapper.toUser(request);
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		return userMapper.toUserResponse(userRepository.save(user));
	}

	public List<UserResponse> getUsers(){
		return userMapper.toUserResponseList(userRepository.findAll());
	}

	public UserResponse getUser(String userId){
		return userMapper.toUserResponse(userRepository
				.findById(userId)
				.orElseThrow(() -> new RuntimeException("User not found!")));
	}

//	public UserResponse updateUser(String userId, UserUpdateRequest request){
//		User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found!")));
//		user.setUsername(request.getUsername());
//		return user;
//	}

	public void deleteUser(String userId){
		userRepository.deleteById(userId);
	}

}
