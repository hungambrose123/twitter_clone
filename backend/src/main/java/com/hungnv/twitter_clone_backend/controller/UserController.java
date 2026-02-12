package com.hungnv.twitter_clone_backend.controller;

import com.hungnv.twitter_clone_backend.dto.request.UserCreationRequest;
import com.hungnv.twitter_clone_backend.dto.request.UserUpdateRequest;
import com.hungnv.twitter_clone_backend.dto.response.UserResponse;
import com.hungnv.twitter_clone_backend.entity.User;
import com.hungnv.twitter_clone_backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping()
    UserResponse createUser(@Valid @RequestBody UserCreationRequest request){
        return userService.createUser(request);
    }

    @GetMapping()
    List<UserResponse> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("{userId}")
    UserResponse getUser(@PathVariable String userId ){
        return userService.getUser(userId);
    }

//    @PutMapping("{userId}")
//    User updateUser(@PathVariable String userId, @RequestBody UserUpdateRequest request){
//        return userService.updateUser(userId, request);
//    }

    @DeleteMapping("{userId}")
    String  deleteUser(@PathVariable String userId){
        UserResponse userResponse = getUser(userId);
        if(!userResponse.getEmail().isEmpty()){
            userService.deleteUser(userId);
            return "User " +userId+" has been deleted";
        }
        return "User not found";
    }

}
