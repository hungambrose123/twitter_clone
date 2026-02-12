package com.hungnv.twitter_clone_backend.mapper;

import com.hungnv.twitter_clone_backend.dto.request.UserCreationRequest;
import com.hungnv.twitter_clone_backend.dto.response.UserResponse;
import com.hungnv.twitter_clone_backend.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserResponse toUserResponse(User user);
    List<UserResponse> toUserResponseList(List<User> userList);
    User toUser(UserCreationRequest request);
}
