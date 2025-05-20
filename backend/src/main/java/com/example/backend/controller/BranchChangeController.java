package com.example.backend.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.BranchChangeRequest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api")
public class BranchChangeController {
    @PostMapping("/branch-change")
    public ResponseEntity<String> handleBranchChange(@RequestBody BranchChangeRequest request) {
        // ...
        return ResponseEntity.ok("Branch change handled successfully");
    }
}