package com.LearningManagementSystemGroup.EduGo.Service.serviceInterface;

import com.LearningManagementSystemGroup.EduGo.Entity.UserData;

public interface UserService {

    UserData userSave(UserData user, String role);
}
