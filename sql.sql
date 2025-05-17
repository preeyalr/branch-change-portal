CREATE DATABASE student_portal;
USE student_portal;

CREATE TABLE branch_change_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  roll_number VARCHAR(20) NOT NULL,
  current_branch VARCHAR(50),
  requested_branch TEXT,
  category VARCHAR(20),
  gender VARCHAR(10),
  dob DATE,
  cgpa DECIMAL(3, 2)
);
