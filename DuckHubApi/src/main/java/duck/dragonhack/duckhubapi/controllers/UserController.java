package duck.dragonhack.duckhubapi.controllers;

import duck.dragonhack.duckhubapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService projectService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
}
