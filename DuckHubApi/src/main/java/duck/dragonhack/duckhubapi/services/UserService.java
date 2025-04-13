package duck.dragonhack.duckhubapi.services;

import duck.dragonhack.duckhubapi.DTOs.UserRequest;
import duck.dragonhack.duckhubapi.DTOs.UserResponse;

import java.util.List;

public interface UserService {
    UserResponse addUser(UserRequest userRequest);

    UserResponse getUser(long id);

    List<UserResponse> getAllUsers();

    UserResponse login(UserRequest userRequest);
}
