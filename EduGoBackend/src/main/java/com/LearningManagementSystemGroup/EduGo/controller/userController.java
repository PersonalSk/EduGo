package com.LearningManagementSystemGroup.EduGo.controller;


import com.LearningManagementSystemGroup.EduGo.Entity.UserData;
import com.LearningManagementSystemGroup.EduGo.Service.serviceInterface.UserService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;

@RestController
public class userController {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    UserService userService;

    @PostMapping("/registeruser")
    public ResponseEntity<String> registerUser(@RequestBody String role, @RequestBody UserData userData) {
        try {
            UserData savedUser = userService.userSave(userData, role);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body("User registered Successfully: " + savedUser.getUserName());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error registering user: " + e.getMessage());
        }
    }

}
