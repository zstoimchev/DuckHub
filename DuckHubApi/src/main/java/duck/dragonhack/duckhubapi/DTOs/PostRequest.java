package duck.dragonhack.duckhubapi.DTOs;

import duck.dragonhack.duckhubapi.models.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostRequest {
    private String photo;
    private long userId;
    private long duckId;
    private long challengeId;

    public Post RequestToPost() {
        Post post = new Post();
        post.setPhoto(photo);
        post.setTimestamp(Instant.now());
        return post;
    }
}
