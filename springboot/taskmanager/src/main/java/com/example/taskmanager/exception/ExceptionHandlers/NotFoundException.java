package com.example.taskmanager.exception.ExceptionHandlers;

public class NotFoundException extends RuntimeException {;
	public NotFoundException(String message){
		super(message);
	}
}
