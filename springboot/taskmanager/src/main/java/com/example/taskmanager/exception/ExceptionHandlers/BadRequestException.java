package com.example.taskmanager.exception.ExceptionHandlers;

public class BadRequestException extends RuntimeException{
    public BadRequestException(String message) {
        super(message);
    }
}
