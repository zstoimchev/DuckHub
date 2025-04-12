package duck.dragonhack.duckhubapi.services.Impl;

import duck.dragonhack.duckhubapi.DTOs.UserRequest;
import duck.dragonhack.duckhubapi.DTOs.UserResponse;
import duck.dragonhack.duckhubapi.models.User;
import duck.dragonhack.duckhubapi.repositories.UserRepository;
import duck.dragonhack.duckhubapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserResponse addUser(UserRequest userRequest) {
        User user = RequestToUser(userRequest);
        User savedUser = userRepository.save(user);
        return UserToResponse(savedUser);
    }

    @Override
    public UserResponse getUser(long id) {
        return UserToResponse(Objects.requireNonNull(userRepository.findById(id).orElse(null)));
    }

    @Override
    public List<UserResponse> getAllUsers() {
        List<User> users = userRepository.findAll();
        if (users.isEmpty()) {
            return null;
        }
        return users.stream().map(this::UserToResponse).collect(Collectors.toList());
    }

    public User RequestToUser(UserRequest userRequest) {
        User user = new User();
        user.setUsername(userRequest.getUsername());
        user.setEmail(userRequest.getEmail());
        user.setPassword(userRequest.getPassword());
        user.setDuckCount(0);
        user.setFollowerCount(0);
        user.setChallengeCount(0);
        user.setFollowingCount(0);
        return user;
    }

    public UserResponse UserToResponse(User user) {
        UserResponse userResponse = new UserResponse();
        userResponse.setId(user.getId());
        userResponse.setUsername(user.getUsername());
        userResponse.setEmail(user.getEmail());
        userResponse.setPassword(user.getPassword());
        userResponse.setDuckCount(user.getDuckCount());
        userResponse.setFollowerCount(user.getFollowerCount());
        userResponse.setChallengeCount(user.getChallengeCount());
        userResponse.setFollowingCount(user.getFollowingCount());
        return userResponse;
    }
}
