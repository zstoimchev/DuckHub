package duck.dragonhack.duckhubapi.DTOs;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
    private long id;

    private String username;

    private String password;

    private String email;

    private int duckCount;

    private int followerCount;

    private int challengeCount;

    private int followingCount;
}
