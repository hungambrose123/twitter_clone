package com.hungnv.twitter_clone_backend.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
public enum ErrorCode {
    EMAIL_EXISTED(400, "Email is already taken!"),
    USERNAME_INVALID(400, "Username must be at least 5 character"),
    PASSWORD_INVALID(400, "Password must be at least 6 character"),
    ;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
    private final int code;
    private final String message;
}
