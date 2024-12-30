package com.LearningManagementSystemGroup.EduGo.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserData {

    @Id
    private String userId;

    private String userName;

    private String password;

    private String emailId;

    private long mobileNumber;
}
