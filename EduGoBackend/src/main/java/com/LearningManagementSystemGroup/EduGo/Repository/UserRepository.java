package com.LearningManagementSystemGroup.EduGo.Repository;


import com.LearningManagementSystemGroup.EduGo.Entity.UserData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<UserData, String> {
    Optional<UserData> findByEmailId(String emailId);
    Optional<UserData> findByMobileNumber(long mobileNumber);
}
