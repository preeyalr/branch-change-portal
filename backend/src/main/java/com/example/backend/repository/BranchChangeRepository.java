// src/main/java/com/example/demo/repository/BranchChangeRepository.java
package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.BranchChangeRequest;

public interface BranchChangeRepository extends JpaRepository<BranchChangeRequest, Long> {}
