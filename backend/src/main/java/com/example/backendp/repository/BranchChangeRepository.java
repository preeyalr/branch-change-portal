// src/main/java/com/example/demo/repository/BranchChangeRepository.java
package com.example.backendp.repository;

import com.example.backendp.BranchChangeRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BranchChangeRepository extends JpaRepository<BranchChangeRequest, Long> {}
