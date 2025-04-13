package duck.dragonhack.duckhubapi.DTOs;

public class UserResponse {
    private long id;
    private String username;
    private String password;
    private String email;
    private int duckCount;
    private int followerCount;
    private int challengeCount;
    private int followingCount;

    public UserResponse() {
    }

    public UserResponse(long id, String username, String password, String email, int duckCount, int followerCount, int challengeCount, int followingCount) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.duckCount = duckCount;
        this.followerCount = followerCount;
        this.challengeCount = challengeCount;
        this.followingCount = followingCount;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getDuckCount() {
        return duckCount;
    }

    public void setDuckCount(int duckCount) {
        this.duckCount = duckCount;
    }

    public int getFollowerCount() {
        return followerCount;
    }

    public void setFollowerCount(int followerCount) {
        this.followerCount = followerCount;
    }

    public int getChallengeCount() {
        return challengeCount;
    }

    public void setChallengeCount(int challengeCount) {
        this.challengeCount = challengeCount;
    }

    public int getFollowingCount() {
        return followingCount;
    }

    public void setFollowingCount(int followingCount) {
        this.followingCount = followingCount;
    }
}
