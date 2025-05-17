package com.example.backendp.controller;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendp.BranchChangeRequest;

@RestController
@RequestMapping("/api")
public class BranchChangeController {

    @PostMapping("/branch-change")
    public ResponseEntity<Map<String, String>> submitBranchChange(@RequestBody BranchChangeRequest request) {
      
        return ResponseEntity.ok(Map.of("message", "Request received!"));
    }
}
