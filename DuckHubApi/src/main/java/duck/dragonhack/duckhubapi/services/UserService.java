package duck.dragonhack.duckhubapi.services;

import duck.dragonhack.duckhubapi.DTOs.UserResponse;

public interface UserService {
    UserResponse addUser(UserRequest userRequest);
    UserResponse getUser(long id);
}
