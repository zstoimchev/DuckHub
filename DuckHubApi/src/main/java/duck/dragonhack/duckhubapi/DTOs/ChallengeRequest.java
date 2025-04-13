package duck.dragonhack.duckhubapi.DTOs;

import duck.dragonhack.duckhubapi.models.Challenge;

public class ChallengeRequest {
    private String title;
    private String difficulty;

    public ChallengeRequest() {
    }

    public ChallengeRequest(String title, String difficulty) {
        this.title = title;
        this.difficulty = difficulty;
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

    public Challenge toChallenge() {
        Challenge challenge = new Challenge();
        challenge.setTitle(this.title);
        challenge.setDifficulty(this.difficulty);
        return challenge;
    }
}