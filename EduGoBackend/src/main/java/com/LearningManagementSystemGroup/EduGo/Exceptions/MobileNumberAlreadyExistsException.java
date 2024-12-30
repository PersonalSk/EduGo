package com.LearningManagementSystemGroup.EduGo.Exceptions;

public class MobileNumberAlreadyExistsException extends RuntimeException {
    public MobileNumberAlreadyExistsException(String message) {
        super(message);
    }
}