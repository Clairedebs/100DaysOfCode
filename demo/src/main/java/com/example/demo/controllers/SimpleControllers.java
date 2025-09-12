package com.example.demo.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SimpleControllers {

    @GetMapping
    public ResponseEntity<String> index() {
        return ResponseEntity.ok("Request done successfully !");
    }

    @GetMapping("/{name}")
    public ResponseEntity<String> greeting( @PathVariable String name ) {
        return ResponseEntity.ok("Request send by : " + name);
    }

}
