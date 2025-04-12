package duck.dragonhack.duckhubapi.DTOs;

import duck.dragonhack.duckhubapi.models.Challenge;
import duck.dragonhack.duckhubapi.models.Duck;
import duck.dragonhack.duckhubapi.models.Post;
import duck.dragonhack.duckhubapi.models.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostResponse {
    private long id;

    private String photo;
    private Instant timestamp;
    private String status;
    private User user;
    private Duck duck;
    private Challenge challenge;


}
