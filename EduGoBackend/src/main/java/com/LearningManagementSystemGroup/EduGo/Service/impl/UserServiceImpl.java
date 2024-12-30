package com.LearningManagementSystemGroup.EduGo.Service.impl;

import com.LearningManagementSystemGroup.EduGo.Entity.UserData;
import com.LearningManagementSystemGroup.EduGo.Exceptions.EmailAlreadyExistsException;
import com.LearningManagementSystemGroup.EduGo.Exceptions.MobileNumberAlreadyExistsException;
import com.LearningManagementSystemGroup.EduGo.Repository.UserRepository;
import com.LearningManagementSystemGroup.EduGo.Service.serviceInterface.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Autowired
    private UserRepository userRepository;


    @Override
    public UserData userSave(UserData userData, String role) {

        System.out.println("enterd into register user");

        JdbcUserDetailsManager userDetailsManager = new JdbcUserDetailsManager(dataSource);

        String encodedPassword = passwordEncoder.encode(userData.getPassword());
        userData.setPassword(encodedPassword);

        if (userRepository.findByEmailId(userData.getEmailId()).isPresent()) {
            throw new EmailAlreadyExistsException("Email already exists: " + userData.getEmailId());
        }

        if (userRepository.findByMobileNumber(userData.getMobileNumber()).isPresent()) {
            throw new MobileNumberAlreadyExistsException("Mobile number already exists: " + userData.getMobileNumber());
        }

        UserDetails user = User.withUsername(userData.getEmailId())
                .password(encodedPassword)
                .roles(role)  // Assign roles based on your requirements
                .build();

        // Step 5: Save the user in Spring Security's database
        userDetailsManager.createUser(user);

        return userRepository.save(userData);



    }
}



