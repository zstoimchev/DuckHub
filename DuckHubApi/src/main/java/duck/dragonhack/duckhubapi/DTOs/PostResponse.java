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
    private User user;
    private Duck duck;
    private Challenge challenge;

    public PostResponse() {
    }

    public PostResponse(long id, String photo, Instant timestamp, String status, User user, Duck duck, Challenge challenge) {
        this.id = id;
        this.photo = photo;
        this.timestamp = timestamp;
        this.status = status;
        this.user = user;
        this.duck = duck;
        this.challenge = challenge;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Duck getDuck() {
        return duck;
    }

    public void setDuck(Duck duck) {
        this.duck = duck;
    }

    public Challenge getChallenge() {
        return challenge;
    }

    public void setChallenge(Challenge challenge) {
        this.challenge = challenge;
    }
}
