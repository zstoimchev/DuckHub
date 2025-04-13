package duck.dragonhack.duckhubapi.DTOs;

import duck.dragonhack.duckhubapi.models.Duck;

public class DuckResponse {
    private Long id;
    private String name;
    private String photo;
    private int level;
    private Long userId;

    public DuckResponse() {
    }

    public DuckResponse(Long id, String name, String photo, int level, Long userId) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.level = level;
        this.userId = userId;
    }

    public static DuckResponse fromDuck(Duck duck) {
        return new DuckResponse(
                duck.getId(),
                duck.getName(),
                duck.getPhoto(),
                duck.getLevel(),
                duck.getUser() != null ? duck.getUser().getId() : null
        );
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
