package com.hungnv.twitter_clone_backend.controller;

import com.hungnv.twitter_clone_backend.dto.request.ApiResponse;
import com.hungnv.twitter_clone_backend.dto.request.UserCreationRequest;
import com.hungnv.twitter_clone_backend.dto.request.UserUpdateRequest;
import com.hungnv.twitter_clone_backend.entity.User;
import com.hungnv.twitter_clone_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping()
    ApiResponse<User> createUser(@RequestBody UserCreationRequest request){
        ApiResponse<User> apiResponse = new ApiResponse<>();
        apiResponse.setResult(userService.createUser(request));
        apiResponse.setCode(200);
        apiResponse.setMessage("Create user successful!");
        return apiResponse;
    }

    @GetMapping()
    List<User> getUser(){
        return userService.getUsers();
    }

    @GetMapping("{userId}")
    User getUser(@PathVariable String userId ){
        return userService.getUser(userId);
    }

    @PutMapping("{userId}")
    User updateUser(@PathVariable String userId, @RequestBody UserUpdateRequest request){
        return userService.updateUser(userId, request);
    }

    @DeleteMapping("{userId}")
    String  deleteUser(@PathVariable String userId){
        userService.deleteUser(userId);
        return "User " +userId+" has been deleted";
    }

}
