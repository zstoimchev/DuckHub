package duck.dragonhack.duckhubapi.controllers;

import duck.dragonhack.duckhubapi.DTOs.UserRequest;
import duck.dragonhack.duckhubapi.DTOs.UserResponse;
import duck.dragonhack.duckhubapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // add a user
    @PostMapping("/create")
    public ResponseEntity<UserResponse> createProject(@RequestBody UserRequest userRequest) {
        return new ResponseEntity<>(userService.addUser(userRequest), HttpStatus.CREATED);
    }

    // Add your endpoint methods here, e.g., for adding or retrieving users

}
