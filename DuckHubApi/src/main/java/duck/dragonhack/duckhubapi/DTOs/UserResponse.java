package duck.dragonhack.duckhubapi.DTOs;

import jakarta.persistence.Column;

public class UserResponse {
    private String username;

    private String password;

    private String email;

    private int duckCount;

    private int followerCount;

    private int challengeCount;

    private int followingCount;
}
