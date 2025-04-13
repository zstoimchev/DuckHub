package duck.dragonhack.duckhubapi.DTOs;

import duck.dragonhack.duckhubapi.models.Challenge;

public class ChallengeResponse {
    private Long id;
    private String title;
    private String difficulty;

    public ChallengeResponse() {
    }

    public ChallengeResponse(Long id, String title, String difficulty) {
        this.id = id;
        this.title = title;
        this.difficulty = difficulty;
    }

    public static ChallengeResponse fromChallenge(Challenge challenge) {
        return new ChallengeResponse(
                challenge.getId(),
                challenge.getTitle(),
                challenge.getDifficulty()
        );
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }
}