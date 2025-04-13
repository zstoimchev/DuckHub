package duck.dragonhack.duckhubapi.DTOs;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import duck.dragonhack.duckhubapi.models.Challenge;
import duck.dragonhack.duckhubapi.models.Duck;
import duck.dragonhack.duckhubapi.models.Post;
import duck.dragonhack.duckhubapi.models.User;
import java.time.Instant;


public class PostResponse {
    private long id;
    private String photo;
    private Instant timestamp;
    private String status;
    private long userId;
    private long duckId;
    private long challengeId;

    public PostResponse() {
    }

    public PostResponse(long id, String photo, Instant timestamp, String status, long userId, long duckId, long challengeId) {
        this.id = id;
        this.photo = photo;
        this.timestamp = timestamp;
        this.status = status;
        this.userId = userId;
        this.duckId = duckId;
        this.challengeId = challengeId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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
}
