package com.example.backend;

import java.util.List;

public class BranchChangeRequest {
    private String name;
    private int rollNumber;
    private String currentBranch;
    private List<String> requestedBranch;
    private String category;
    private String categoryAlloted;
    private String gender;
    private String dob;
    private double cgpa;

    // Default constructor
    public BranchChangeRequest() {
        // Needed for frameworks like Jackson
    }

    // Getters and Setters

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

   public int getrollNumber() {
        return rollNumber;
    }

    public void setRollNumber(int rollNumber) {
        this.rollNumber = rollNumber;
    }

    public String getCurrentBranch() {
        return currentBranch;
    }

    public void setCurrentBranch(String currentBranch) {
        this.currentBranch = currentBranch;
    }

    public List<String> getRequestedBranch() {
        return requestedBranch;
    }

    public void setRequestedBranch(List<String> requestedBranch) {
        this.requestedBranch = requestedBranch;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCategoryAlloted() {
        return categoryAlloted;
    }

    public void setCategoryAlloted(String categoryAlloted) {
        this.categoryAlloted = categoryAlloted;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public double getCgpa() {
        return cgpa;
    }

    public void setCgpa(double cgpa) {
        this.cgpa = cgpa;
    }
}
