package duck.dragonhack.duckhubapi.DTOs;

import duck.dragonhack.duckhubapi.models.Post;
import java.time.Instant;

public class PostRequest {
    private String photo;
    private long userId;
    private long duckId;
    private long challengeId;

    public PostRequest() {
    }

    public PostRequest(String photo, long userId, long duckId, long challengeId) {
        this.photo = photo;
        this.userId = userId;
        this.duckId = duckId;
        this.challengeId = challengeId;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getDuckId() {
        return duckId;
    }

    public void setDuckId(long duckId) {
        this.duckId = duckId;
    }

    public long getChallengeId() {
        return challengeId;
    }

    public void setChallengeId(long challengeId) {
        this.challengeId = challengeId;
    }

    public Post RequestToPost() {
        Post post = new Post();
        post.setPhoto(photo);
        post.setTimestamp(Instant.now());
        return post;
    }
}
