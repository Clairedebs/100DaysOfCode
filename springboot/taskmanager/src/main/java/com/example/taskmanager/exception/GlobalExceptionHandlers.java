package com.example.taskmanager.exception;

import com.example.taskmanager.exception.ExceptionHandlers.BadRequestException;
import com.example.taskmanager.exception.ExceptionHandlers.NotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@Slf4j
@ControllerAdvice
@ResponseStatus
public class GlobalExceptionHandlers {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ErrorObject> handleNotFoundException(NotFoundException e, WebRequest request) {
        ErrorObject errorObject = new ErrorObject();
        log.error(e.getMessage());
        errorObject.setTimestamp(new Date());
        errorObject.setMessage(e.getMessage());
        errorObject.setStatusCode(HttpStatus.NOT_FOUND.value());
        return new ResponseEntity<>(errorObject, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ErrorObject> handleBadRequestException(BadRequestException e, WebRequest request) {
        ErrorObject errorObject = new ErrorObject();
        errorObject.setTimestamp(new Date());
        errorObject.setMessage(e.getMessage());
        errorObject.setStatusCode(HttpStatus.BAD_REQUEST.value());
        return new ResponseEntity<>(errorObject, HttpStatus.BAD_REQUEST);
    }
}
